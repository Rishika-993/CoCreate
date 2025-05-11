'use client';
import React, { useState, useCallback, useEffect, useRef } from 'react';

const DraggableDivider = () => {
  const [leftWidth, setLeftWidth] = useState(50);
  const containerRef = useRef(null);
  const dividerRef = useRef(null);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove, handleMouseUp]);

  const handleMouseMove = useCallback((e) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setLeftWidth(Math.min(Math.max(newLeftWidth, 10), 90));
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  useEffect(() => {
    const divider = dividerRef.current;
    divider.addEventListener('mousedown', handleMouseDown);

    return () => {
      divider.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleMouseDown]);

  return (
    <div ref={containerRef} className="flex h-screen">
      <div
        className="bg-blue-200 transition-all duration-75 ease-in-out"
        style={{ width: `${leftWidth}%` }}
      >
        <div className="h-full flex items-center justify-center">
          Left Content
        </div>
      </div>
      <div
        ref={dividerRef}
        className="w-1 bg-gray-300 cursor-col-resize hover:bg-gray-400 active:bg-gray-500"
      />
      <div
        className="bg-green-200 transition-all duration-75 ease-in-out"
        style={{ width: `${100 - leftWidth}%` }}
      >
        <div className="h-full flex items-center justify-center">
          Right Content
        </div>
      </div>
    </div>
  );
};

export default DraggableDivider;