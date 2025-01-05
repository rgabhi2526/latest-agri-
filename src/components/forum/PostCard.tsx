import React from 'react';
import { MessageSquare, ThumbsUp, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface PostCardProps {
  title: string;
  author: string;
  content: string;
  likes: number;
  comments: number;
  createdAt: Date;
  tags: string[];
}

export default function PostCard({ title, author, content, likes, comments, createdAt, tags }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600">{title}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          {formatDistanceToNow(createdAt, { addSuffix: true })}
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{content}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs bg-green-50 text-green-600 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-600">By {author}</span>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-500 hover:text-green-600">
            <ThumbsUp className="w-4 h-4 mr-1" />
            <span className="text-sm">{likes}</span>
          </button>
          <button className="flex items-center text-gray-500 hover:text-green-600">
            <MessageSquare className="w-4 h-4 mr-1" />
            <span className="text-sm">{comments}</span>
          </button>
        </div>
      </div>
    </div>
  );
}