import { useState, useEffect } from 'react';
import { useStudy } from '@/contexts/StudyContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { X, Save } from 'lucide-react';

interface NotesEditorProps {
  weekNumber: number;
  onClose: () => void;
}

export function NotesEditor({ weekNumber, onClose }: NotesEditorProps) {
  const { getNote, saveNote } = useStudy();
  const [content, setContent] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const existingNote = getNote(weekNumber);
    if (existingNote) {
      setContent(existingNote);
    }
  }, [weekNumber, getNote]);

  const handleSave = () => {
    saveNote(weekNumber, content);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="font-semibold text-foreground">Notes for Week {weekNumber}</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add your personal notes here... Write down important concepts, questions, or progress notes."
            className="min-h-64 resize-none"
          />
        </div>

        <div className="flex items-center justify-between p-4 border-t border-border bg-muted/30">
          <p className="text-xs text-muted-foreground">
            {content.length} characters
          </p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="gap-2"
            >
              <Save className="w-4 h-4" />
              {isSaved ? 'Saved!' : 'Save Notes'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
