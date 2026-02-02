import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, ArrowRight, ExternalLink, FileText } from 'lucide-react';
import { Week } from '@/data/plan';
import { useStudy } from '@/contexts/StudyContext';
import { NotesEditor } from './NotesEditor';

interface WeekDetailModalProps {
  week: Week | null;
  isOpen: boolean;
  onClose: () => void;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export function WeekDetailModal({
  week,
  isOpen,
  onClose,
  isCompleted,
  onToggleComplete
}: WeekDetailModalProps) {
  const { getNote } = useStudy();
  const [showNotesEditor, setShowNotesEditor] = useState(false);

  if (!week) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Beginner';
      case 'intermediate':
        return 'Intermediate';
      case 'advanced':
        return 'Advanced';
      default:
        return difficulty;
    }
  };

  const existingNote = getNote(week.week);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={getDifficultyColor(week.difficulty)}>
                    {getDifficultyLabel(week.difficulty)}
                  </Badge>
                  <span className="text-sm text-muted-foreground">Week {week.week}</span>
                </div>
                <DialogTitle className="text-2xl">{week.title}</DialogTitle>
                <DialogDescription className="text-base mt-2">{week.mainTopic}</DialogDescription>
              </div>
              <button
                onClick={onToggleComplete}
                className="flex-shrink-0 ml-4"
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                ) : (
                  <Circle className="w-8 h-8 text-muted-foreground" />
                )}
              </button>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            {/* Description */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">Overview</h3>
              <p className="text-muted-foreground">{week.description}</p>
            </div>

            {/* Project */}
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-lg">🎯</span> Main Project
              </h3>
              <p className="text-foreground font-medium">{week.project}</p>
            </div>

            {/* Learning Objectives */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Learning Objectives</h3>
              <ul className="space-y-2">
                {week.objectives.map((objective, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Resources */}
            {(week.resources.arabic || week.resources.english) && (
              <div>
                <h3 className="font-semibold text-foreground mb-3">Main Learning Resources</h3>
                <div className="space-y-2">
                  {week.resources.arabic && (
                    <a
                      href={week.resources.arabic}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-200 dark:border-orange-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <span className="font-medium text-foreground">Arabic Resource</span>
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </a>
                  )}
                  {week.resources.english && (
                    <a
                      href={week.resources.english}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <span className="font-medium text-foreground">English Resource</span>
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* YouTube Channels */}
            {week.youtubeChannels.length > 0 && (
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-lg">▶️</span> YouTube Channels
                </h3>
                <div className="space-y-2">
                  {week.youtubeChannels.map((channel, idx) => (
                    <a
                      key={idx}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div>
                        <p className="font-medium text-foreground text-sm">{channel.name}</p>
                        <p className="text-xs text-muted-foreground">{channel.language === 'arabic' ? 'Arabic' : 'English'}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Free Books */}
            {week.freeBooks.length > 0 && (
              <div>
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-lg">📚</span> Free Books & Guides
                </h3>
                <div className="space-y-2">
                  {week.freeBooks.map((book, idx) => (
                    <a
                      key={idx}
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div>
                        <p className="font-medium text-foreground text-sm">{book.title}</p>
                        <p className="text-xs text-muted-foreground">{book.format === 'pdf' ? 'PDF' : book.format === 'html' ? 'HTML' : 'Web'}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Notes Section */}
            <div className="bg-muted/50 p-4 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Personal Notes
                </h3>
                {existingNote && (
                  <Badge variant="secondary" className="text-xs">Has notes</Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {existingNote ? 'You have notes for this week. Click edit to update them.' : 'Add personal notes for this week to track your progress and important concepts.'}
              </p>
              <Button
                onClick={() => setShowNotesEditor(true)}
                variant="outline"
                className="w-full"
              >
                {existingNote ? 'Edit Notes' : 'Add Notes'}
              </Button>
            </div>

            {/* Action Button */}
            <div className="flex gap-2 pt-4 border-t border-border">
              <Button
                onClick={onToggleComplete}
                className={`flex-1 ${
                  isCompleted
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-primary hover:bg-primary/90'
                }`}
              >
                {isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
              </Button>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Notes Editor Modal */}
      {showNotesEditor && (
        <NotesEditor
          weekNumber={week.week}
          onClose={() => setShowNotesEditor(false)}
        />
      )}
    </>
  );
}
