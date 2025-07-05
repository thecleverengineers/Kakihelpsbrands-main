import { useState, useEffect } from 'react';
import { YouTubeService } from '@/services/youtubeApi';

interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  embedUrl: string;
}

interface UseYouTubeProps {
  apiKey?: string;
  channelId?: string;
  playlistId?: string;
  maxResults?: number;
}

export const useYouTube = ({ 
  apiKey, 
  channelId, 
  playlistId, 
  maxResults = 10 
}: UseYouTubeProps) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiKey) return;

    const fetchVideos = async () => {
      setLoading(true);
      setError(null);

      try {
        const youtubeService = new YouTubeService(apiKey, channelId || '');
        
        let fetchedVideos: YouTubeVideo[];
        
        if (playlistId) {
          fetchedVideos = await youtubeService.getPlaylistVideos(playlistId, maxResults);
        } else if (channelId) {
          fetchedVideos = await youtubeService.getChannelVideos(maxResults);
        } else {
          throw new Error('Either channelId or playlistId must be provided');
        }

        setVideos(fetchedVideos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch videos');
        console.error('YouTube fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [apiKey, channelId, playlistId, maxResults]);

  return { videos, loading, error };
};