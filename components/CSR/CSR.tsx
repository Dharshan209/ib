"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Image as ImageIcon,
  AlertCircle,
  X,
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
    <div className="pt-10 pb-20 px-6 md:px-7 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 items-center text-[13px] text-ink-2 mb-6">
          <Link href="/" className="text-green-ink">Home</Link>
          <span className="text-ink-3">/</span>
          <span className="text-ink">CSR</span>
        </div>
        <div className="max-w-[64ch] mb-2">
          <div className="eyebrow mb-5">Social impact</div>
          <h1 className="font-semibold text-4xl md:text-[44px] leading-[1.06] tracking-[-0.03em] text-navy mb-5 max-w-[18ch]">
            Our commitment to community
          </h1>
          <p className="text-xl leading-relaxed text-ink-2 m-0">
            &ldquo;At Indian Biologicals, true excellence goes beyond success — it is reflected in the lives we touch and the lasting positive impact we create in society.&rdquo;
          </p>
        </div>

        {error && (
          <div className="max-w-2xl mb-8 mt-9 p-4 bg-warning-bg border border-[#F0DBB0] rounded-md flex items-center gap-3 text-warning">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-semibold text-ink-2">{error}</p>
          </div>
        )}

        {!API_KEY && !FOLDER_ID && !isLoading && (
          <div className="max-w-2xl mt-9 mb-9 p-9 bg-sunk border border-line rounded-lg text-center">
            <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-lg flex items-center justify-center mx-auto mb-5 text-green-ink">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-2xl text-navy mb-3">Drive connection pending</h3>
            <p className="text-ink-2 mb-6">Configure your Google Cloud credentials in the environment variables to activate the live CSR gallery.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-surface rounded-md text-xs font-semibold text-ink-2 border border-line-strong uppercase tracking-wider">1. Set API key</div>
              <div className="px-4 py-2 bg-surface rounded-md text-xs font-semibold text-ink-2 border border-line-strong uppercase tracking-wider">2. Share folder ID</div>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-[210px] gap-4 mt-9">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-sunk rounded-lg shimmer"></div>
            ))
          ) : files.length > 0 ? (
            files.map((file, index) => (
              <button
                key={file.id}
                onClick={() => openModal(file)}
                className={`group relative rounded-lg overflow-hidden cursor-pointer border border-line shadow-sm hover:shadow-lg transition-all duration-500 ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
              >
                <Image
                  src={getHighResLink(file.id)}
                  alt={file.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                  priority={index < 3}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-500"></div>
              </button>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-sunk rounded-lg border border-dashed border-line-strong">
              <div className="w-16 h-16 bg-surface rounded-lg flex items-center justify-center mx-auto mb-5 text-ink-3 shadow-sm">
                <ImageIcon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-xl text-ink-2 mb-2">Gallery awaiting content</h3>
              <p className="text-ink-3 max-w-md mx-auto">Update your shared Google Drive folder and tag photos to see your impact showcased here.</p>
            </div>
          )}
        </div>
      </div>

      {/* Activity Modal */}
      {selectedFile && (
        <div onClick={closeModal} className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-navy/70 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-[16/10]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={getHighResLink(selectedFile.id)}
              alt={selectedFile.name}
              fill
              className="object-contain rounded-xl"
              unoptimized
              referrerPolicy="no-referrer"
            />
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-surface border border-line-strong flex items-center justify-center text-ink shadow-[var(--e-3)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSR;
