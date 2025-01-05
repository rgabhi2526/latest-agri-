import React from 'react';
import { PenSquare } from 'lucide-react';

export default function CreatePostButton() {
  return (
    <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
      <PenSquare className="w-5 h-5 mr-2" />
      Create Post
    </button>
  );
}