import React, { useState } from 'react';
import PageTransition from '../components/shared/PageTransition';
import PostCard from '../components/forum/PostCard';
import CategoryFilter from '../components/forum/CategoryFilter';
import CreatePostButton from '../components/forum/CreatePostButton';
import { Search } from 'lucide-react';

const categories = [
  { id: 'crops', name: 'Crops', count: 15 },
  { id: 'irrigation', name: 'Irrigation', count: 8 },
  { id: 'pests', name: 'Pest Control', count: 12 },
  { id: 'soil', name: 'Soil Management', count: 10 },
];

const samplePosts = [
  {
    id: 1,
    title: 'Best practices for organic pest control?',
    author: 'John Smith',
    content: 'I\'ve been having issues with aphids in my tomato garden. Looking for organic solutions that won\'t harm beneficial insects.',
    likes: 24,
    comments: 12,
    createdAt: new Date('2024-03-10'),
    tags: ['organic', 'pest-control', 'tomatoes'],
  },
  {
    id: 2,
    title: 'Water-efficient irrigation systems',
    author: 'Sarah Johnson',
    content: 'What are your experiences with drip irrigation systems? Looking to upgrade my current setup.',
    likes: 18,
    comments: 8,
    createdAt: new Date('2024-03-12'),
    tags: ['irrigation', 'water-management'],
  },
];

export default function Forum() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <PageTransition>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Community Forum</h1>
          <CreatePostButton />
        </div>

        <div className="mb-6">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full px-4 py-2 pl-10 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="grid gap-4">
          {samplePosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}