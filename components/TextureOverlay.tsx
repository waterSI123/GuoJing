import React from 'react';

const TextureOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none opacity-40 mix-blend-multiply bg-paper-pattern" />
  );
};

export default TextureOverlay;