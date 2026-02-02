import { useStudy } from '@/contexts/StudyContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function StudySchedule() {
  const { dailyHours, startDate, setDailyHours, setStartDate } = useStudy();
  const [isEditing, setIsEditing] = useState(false);
  const [tempHours, setTempHours] = useState(dailyHours);
  const [tempDate, setTempDate] = useState(startDate);

  const handleSave = () => {
    setDailyHours(tempHours);
    setStartDate(tempDate);
    setIsEditing(false);
  };

  const calculateEndDate = () => {
    const start = new Date(startDate);
    const totalHours = dailyHours * 7 * 12; // 12 weeks
    const totalDays = Math.ceil(totalHours / 8); // Assuming 8 hours per day max
    const end = new Date(start.getTime() + totalDays * 24 * 60 * 60 * 1000);
    return end.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const projectLinks = [
    { name: 'TryHackMe', url: 'https://tryhackme.com', icon: '🎯' },
    { name: 'HackTheBox', url: 'https://www.hackthebox.com', icon: '📦' },
    { name: 'OverTheWire', url: 'https://overthewire.org', icon: '⚔️' },
    { name: 'PicoCTF', url: 'https://picoctf.org', icon: '🚩' },
    { name: 'Blue Team Labs', url: 'https://blueteamlabs.online', icon: '🛡️' },
    { name: 'Cybrary', url: 'https://www.cybrary.it', icon: '🎓' }
  ];

  return (
    <div className="space-y-6">
      {/* Study Plan */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Your Study Plan
          </CardTitle>
          <CardDescription>Customize your learning schedule</CardDescription>
        </CardHeader>
        <CardContent>
          {!isEditing ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Daily Study Hours</p>
                  <p className="text-2xl font-bold text-primary">{dailyHours}h</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Start Date</p>
                  <p className="text-sm font-semibold text-foreground">{new Date(startDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-muted-foreground mb-1">Estimated Completion</p>
                <p className="font-semibold text-foreground">{calculateEndDate()}</p>
              </div>
              <Button onClick={() => setIsEditing(true)} variant="outline" className="w-full">
                Edit Schedule
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <Label htmlFor="hours" className="text-sm">Daily Study Hours</Label>
                <Input
                  id="hours"
                  type="number"
                  min="1"
                  max="8"
                  value={tempHours}
                  onChange={(e) => setTempHours(parseInt(e.target.value) || 2)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="date" className="text-sm">Start Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={tempDate}
                  onChange={(e) => setTempDate(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSave} className="flex-1">Save</Button>
                <Button onClick={() => setIsEditing(false)} variant="outline" className="flex-1">Cancel</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Project Links */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-primary" />
            Practice Platforms
          </CardTitle>
          <CardDescription>Direct links to hands-on learning platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projectLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg hover:shadow-md transition-shadow flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{link.icon}</span>
                  <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">{link.name}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
