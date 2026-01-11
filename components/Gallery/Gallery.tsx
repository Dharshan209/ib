"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  X,
  ImageIcon,
  AlertCircle
} from 'lucide-react';

interface DriveFile {
  id: string;
  name: string;
  thumbnailLink: string;
  webContentLink?: string;
  description?: string;
}

const Gallery = () => {
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<DriveFile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Configuration - Uses Environment Variables
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;
  // Using a specific folder ID for Gallery, falling back to CSR folder if not set (or should it be separate? I'll assume separate as per plan)
  const FOLDER_ID = process.env.NEXT_PUBLIC_GALLERY_FOLDER_ID;

  useEffect(() => {
    const fetchDriveFiles = async () => {
      if (!API_KEY || !FOLDER_ID) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        // Same query logic as CSR
        const q = `'${FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`;
        const fields = 'files(id, name, thumbnailLink, webContentLink, description)';
        const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=${encodeURIComponent(fields)}&key=${API_KEY}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error?.message || 'Failed to fetch from Google Drive');
        }
        
        const data = await response.json();
        console.log("Fetched Gallery Files:", data.files);
        setFiles(data.files || []);
      } catch (err: any) {
        console.error("Gallery Drive Fetch Error:", err);
        setError("Please check your Google Drive API Key and Gallery Folder permissions.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDriveFiles();
  }, [API_KEY, FOLDER_ID]);

  const getHighResLink = (id: string) => {
    return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
  };

  const openModal = (file: DriveFile) => {
    setSelectedFile(file);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedFile(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Our Journey in Frames</h1>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Snapshots from our impactful work and milestones</p>
        </div>

        {error && (
          <div className="max-w-2xl mx-auto mb-16 p-5 bg-red-50 border border-red-100 rounded-[2rem] flex items-center gap-4 text-red-800 animate-slide-up">
            <AlertCircle className="w-6 h-6 shrink-0" />
            <p className="text-sm font-bold">{error}</p>
          </div>
        )}

        {!API_KEY && !FOLDER_ID && !isLoading && (
            <div className="max-w-3xl mx-auto mb-20 p-12 bg-slate-50 border border-slate-200 rounded-[3rem] text-center animate-slide-up relative overflow-hidden group">
            <div className="relative z-10">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-primary">
                <ImageIcon className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black text-primary mb-4">Gallery Setup Required</h3>
                <p className="text-slate-500 mb-8 text-lg">Please configure <code>NEXT_PUBLIC_GALLERY_FOLDER_ID</code> in your environment variables.</p>
            </div>
            </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-[4/3] bg-slate-100 rounded-[2.5rem] shimmer"></div>
            ))
          ) : files.length > 0 ? (
            files.map((file, index) => (
              <div 
                key={file.id}
                onClick={() => openModal(file)}
                className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 bg-slate-50 cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Image 
                  src={getHighResLink(file.id)} 
                  alt={file.name} 
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  unoptimized
                  priority={index < 3}
                  referrerPolicy="no-referrer"
                />
                
                {/* Simplified Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))
          ) : (
            !isLoading && API_KEY && FOLDER_ID && (
                <div className="col-span-full py-32 text-center bg-slate-50 rounded-[4rem] border-4 border-dashed border-slate-200">
                <div className="w-24 h-24 bg-white rounded-4xl flex items-center justify-center mx-auto mb-8 text-slate-300 shadow-sm">
                    <ImageIcon className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-black text-slate-400 mb-4">No Images Found</h3>
                <p className="text-slate-400 text-lg max-w-md mx-auto italic">This folder appears to be empty.</p>
                </div>
            )
          )}
        </div>
      </div>

       {/* Lightbox Modal */}
       {selectedFile && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fade-in">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          ></div>
          
          <div className="w-full max-w-6xl max-h-[90vh] relative z-[110] flex flex-col items-center justify-center animate-scale-up">
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 md:-right-12 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-10 h-10" />
            </button>

            <div className="relative w-full h-[80vh] rounded-[2rem] overflow-hidden bg-black/50 shadow-2xl">
              <Image 
                src={getHighResLink(selectedFile.id)} 
                alt={selectedFile.name} 
                fill
                className="object-contain"
                unoptimized
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;