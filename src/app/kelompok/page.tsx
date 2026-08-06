import React, { use } from 'react';
import Link from 'next/link';

export default function KelompokPage({
  searchParams,
}: {
  searchParams: Promise<{ cluster?: string }>;
}) {
  const resolvedParams = use(searchParams);
  const clusterId = resolvedParams.cluster || '';

  return (
    <main style={{ padding: '4rem 2rem', backgroundColor: '#FFFCF7', minHeight: '100vh', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: '#6B7280', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
          <span>←</span> Kembali
        </Link>
        
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1A1A1A' }}>
            Data Kelompok {clusterId ? `Cluster ${clusterId}` : ''}
          </h1>
          <p style={{ color: '#6B7280', fontSize: '1rem', lineHeight: 1.5, maxWidth: '600px' }}>
            Halaman ini dipersiapkan untuk menampilkan tabel data kelompok dari Backend. Data akan disesuaikan berdasarkan Cluster yang dipilih.
          </p>
        </div>
        
        {/* Container untuk Tabel Backend */}
        <div style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '16px', 
          padding: '2.5rem', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.04)', 
          border: '1px solid rgba(0,0,0,0.05)', 
          minHeight: '400px', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          
          <div style={{ 
            width: '64px', 
            height: '64px', 
            borderRadius: '50%', 
            backgroundColor: '#F3F4F6', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#4B5563', marginBottom: '0.5rem' }}>
            Area Tabel Data
          </h3>
          <p style={{ color: '#9CA3AF', textAlign: 'center', maxWidth: '400px', lineHeight: 1.5 }}>
            Di sinilah Anda dapat melakukan fetch data dari backend atau memasukkan komponen tabel untuk merender data kelompok {clusterId ? `Cluster ${clusterId}` : ''}.
          </p>

        </div>
      </div>
    </main>
  );
}
