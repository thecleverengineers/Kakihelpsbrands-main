
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Youtube, Key, Users, List } from 'lucide-react';

interface YouTubeIntegrationProps {
  onApiKeySet: (apiKey: string, channelId: string, playlistId?: string) => void;
  hasApiKey: boolean;
}

export const YouTubeIntegration = ({ onApiKeySet, hasApiKey }: YouTubeIntegrationProps) => {
  // Hardcoded YouTube credentials
  const [apiKey, setApiKey] = useState('AIzaSyCBPA_VvusazHVm5tKUaBYv00PcdfQirmg');
  const [channelId, setChannelId] = useState('@kaki9139');
  const [playlistId, setPlaylistId] = useState('PLB62csA14WQoYAEavYpLrG66xScEI1dte');
  const [showForm, setShowForm] = useState(!hasApiKey);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey && (channelId || playlistId)) {
      onApiKeySet(apiKey, channelId, playlistId || undefined);
      setShowForm(false);
    }
  };

  if (hasApiKey && !showForm) {
    return (
      <div className="text-center p-4">
        <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
          <Youtube className="w-5 h-5" />
          <span>YouTube API Connected</span>
        </div>
        <Button 
          onClick={() => setShowForm(true)} 
          variant="outline" 
          size="sm"
        >
          Update Settings
        </Button>
      </div>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-kaki-dark-grey border-purple-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Youtube className="w-6 h-6 text-red-500" />
          YouTube API Integration
        </CardTitle>
        <CardDescription>
          Connect your YouTube channel to display real videos instead of placeholders.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6 border-blue-500/20 bg-blue-500/10">
          <Key className="w-4 h-4" />
          <AlertDescription>
            <strong>How to get your YouTube API credentials:</strong>
            <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
              <li>Go to <a href="https://console.developers.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google Cloud Console</a></li>
              <li>Create a new project or select existing one</li>
              <li>Enable the YouTube Data API v3</li>
              <li>Create credentials (API Key) and copy it</li>
              <li>Find your Channel ID from your YouTube channel URL or settings</li>
            </ol>
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="apiKey" className="flex items-center gap-2">
              <Key className="w-4 h-4" />
              YouTube API Key *
            </Label>
            <Input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              required
              className="bg-kaki-black/50"
            />
          </div>

          <div>
            <Label htmlFor="channelId" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              YouTube Channel ID
            </Label>
            <Input
              id="channelId"
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
              placeholder="UC..."
              className="bg-kaki-black/50"
            />
            <p className="text-xs text-kaki-grey mt-1">
              Either Channel ID or Playlist ID is required
            </p>
          </div>

          <div>
            <Label htmlFor="playlistId" className="flex items-center gap-2">
              <List className="w-4 h-4" />
              YouTube Playlist ID (Optional)
            </Label>
            <Input
              id="playlistId"
              value={playlistId}
              onChange={(e) => setPlaylistId(e.target.value)}
              placeholder="PL..."
              className="bg-kaki-black/50"
            />
            <p className="text-xs text-kaki-grey mt-1">
              Use playlist ID to show videos from a specific playlist
            </p>
          </div>

          <div className="flex gap-2">
            <Button 
              type="submit" 
              disabled={!apiKey || (!channelId && !playlistId)}
              className="flex-1"
            >
              Connect YouTube
            </Button>
            {hasApiKey && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};