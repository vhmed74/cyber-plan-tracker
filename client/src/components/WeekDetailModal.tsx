import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, ArrowRight, ExternalLink } from 'lucide-react';
import { Week } from '@/data/plan';

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

  return (
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
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
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

          {/* Resources */}
          {(week.resources.arabic || week.resources.english) && (
            <div>
              <h3 className="font-semibold text-foreground mb-3">Learning Resources</h3>
              <div className="space-y-2">
                {week.resources.arabic && (
                  <a
                    href={week.resources.arabic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg hover:shadow-md transition-shadow"
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
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <span className="font-medium text-foreground">English Resource</span>
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </a>
                )}
              </div>
            </div>
          )}

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
              {isCompleted ? '✓ Mark as Incomplete' : 'Mark as Complete'}
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
