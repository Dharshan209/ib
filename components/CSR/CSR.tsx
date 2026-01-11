"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Heart, 
  Image as ImageIcon,
  AlertCircle,
  X,
  Activity,
  GraduationCap,
  Droplets,
  Users,
  Leaf,
  Maximize2
} from 'lucide-react';

interface DriveFile {
  id: string;
  name: string;
  thumbnailLink: string;
  webContentLink?: string;
  description?: string;
}

const CSR = () => {
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<DriveFile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Configuration - Uses Environment Variables
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;
  const FOLDER_ID = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID;

  useEffect(() => {
    const fetchDriveFiles = async () => {
      if (!API_KEY || !FOLDER_ID) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const q = `'${FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`;
        const fields = 'files(id, name, thumbnailLink, webContentLink, description)';
        const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=${encodeURIComponent(fields)}&key=${API_KEY}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error?.message || 'Failed to fetch from Google Drive');
        }
        
        const data = await response.json();
        console.log("Fetched Drive Files:", data.files);
        setFiles(data.files || []);
      } catch (err: any) {
        console.error("Google Drive Fetch Error:", err);
        setError("Please check your Google Drive API Key and Folder permissions.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDriveFiles();
  }, [API_KEY, FOLDER_ID]);

  // Dynamic Icon Mapping based on file name
  const getIconForFile = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('health') || lowerName.includes('camp') || lowerName.includes('medical')) return Activity;
    if (lowerName.includes('education') || lowerName.includes('school') || lowerName.includes('student')) return GraduationCap;
    if (lowerName.includes('water') || lowerName.includes('rural') || lowerName.includes('hygiene')) return Droplets;
    if (lowerName.includes('women') || lowerName.includes('skill') || lowerName.includes('community')) return Users;
    if (lowerName.includes('environment') || lowerName.includes('tree') || lowerName.includes('green')) return Leaf;
    return ImageIcon;
  };

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
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-primary/5 px-6 py-2 rounded-full border border-primary/10 mb-8">
            <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
            <span className="text-primary font-black text-sm tracking-widest uppercase">Social Impact Journey</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 tracking-tight">Our Commitment <br /> to <span className="text-secondary bg-clip-text">Community</span></h1>
          <div className="w-32 h-2.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
          <div className="mt-8 max-w-4xl mx-auto">
             <p className="text-xl md:text-2xl text-slate-600 font-serif italic leading-relaxed">
              &ldquo;At Indian Biologicals, true excellence goes beyond success—it is reflected in the lives we touch and the lasting positive impact we create in society.&rdquo;
            </p>
          </div>
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
              <h3 className="text-3xl font-black text-primary mb-4">Drive Connection Pending</h3>
              <p className="text-slate-500 mb-8 text-lg">Please configure your Google Cloud credentials in the environment variables to activate the live CSR gallery.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-6 py-3 bg-white rounded-2xl text-xs font-black text-primary border border-slate-200 uppercase tracking-widest shadow-sm">1. Set API Key</div>
                <div className="px-6 py-3 bg-white rounded-2xl text-xs font-black text-primary border border-slate-200 uppercase tracking-widest shadow-sm">2. Share Folder ID</div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-slate-50 rounded-[3rem] aspect-square shimmer flex flex-col p-6">
                <div className="w-full grow bg-slate-200/50 rounded-[2.5rem] mb-6"></div>
                <div className="h-8 bg-slate-200/50 rounded-full w-3/4 mb-4"></div>
                <div className="h-4 bg-slate-200/50 rounded-full w-1/2"></div>
              </div>
            ))
          ) : files.length > 0 ? (
            files.map((file, index) => {
              const Icon = getIconForFile(file.name);
              return (
                <div 
                  key={file.id} 
                  onClick={() => openModal(file)}
                  className="group relative aspect-square rounded-[3rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Photo Layer */}
                  <Image 
                    src={getHighResLink(file.id)}
                    alt={file.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    unoptimized
                    priority={index < 3}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glass Overlay Layer - Simplified */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-32 text-center bg-slate-50 rounded-[4rem] border-4 border-dashed border-slate-200">
              <div className="w-24 h-24 bg-white rounded-4xl flex items-center justify-center mx-auto mb-8 text-slate-300 shadow-sm">
                <ImageIcon className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-black text-slate-400 mb-4">Gallery Awaiting Content</h3>
              <p className="text-slate-400 text-lg max-w-md mx-auto italic">Update your shared Google Drive folder and tag photos to see your impact showcased here.</p>
            </div>
          )}
        </div>
      </div>

      {/* Activity Modal */}
      {selectedFile && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fade-in">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          ></div>
          
          <div className="w-full max-w-6xl max-h-[90vh] relative z-[110] flex flex-col items-center justify-center animate-scale-up">
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 md:-right-12 text-white/80 hover:text-white transition-colors z-20"
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

export default CSR;
