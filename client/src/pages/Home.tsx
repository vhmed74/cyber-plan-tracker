import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle, Zap, Shield, Cloud, ArrowRight } from 'lucide-react';
import { weeks, specializationPaths } from '@/data/plan';

export default function Home() {
  const [completedWeeks, setCompletedWeeks] = useState<number[]>([]);
  const [currentWeek, setCurrentWeek] = useState(1);

  const progressPercentage = (completedWeeks.length / weeks.length) * 100;

  const toggleWeekCompletion = (weekNumber: number) => {
    setCompletedWeeks(prev =>
      prev.includes(weekNumber)
        ? prev.filter(w => w !== weekNumber)
        : [...prev, weekNumber]
    );
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-900/80" />
        <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Cybersecurity Ultra-Efficiency Plan</h1>
          <p className="text-xl mb-2">Master Cybersecurity from Zero to Expert</p>
          <p className="text-sm opacity-90">12 weeks of intensive project-based learning</p>
        </div>
      </section>

      {/* Progress Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Overall Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">{progressPercentage.toFixed(0)}%</div>
              <Progress value={progressPercentage} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">{completedWeeks.length} of {weeks.length} weeks</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">Week {currentWeek}</div>
              <p className="text-sm text-muted-foreground">{weeks[currentWeek - 1]?.title}</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent mb-2">{completedWeeks.length}</div>
              <p className="text-sm text-muted-foreground">out of {weeks.length} projects</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 pb-12">
        <Tabs defaultValue="weeks" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="weeks">12 Weeks</TabsTrigger>
            <TabsTrigger value="specialization">Specialization</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Weeks Tab */}
          <TabsContent value="weeks" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {weeks.map((week) => {
                const isCompleted = completedWeeks.includes(week.week);
                return (
                  <Card
                    key={week.week}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      isCompleted ? 'border-green-500 bg-green-50' : 'border-border'
                    }`}
                    onClick={() => {
                      toggleWeekCompletion(week.week);
                      setCurrentWeek(week.week);
                    }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getDifficultyColor(week.difficulty)}>
                              {getDifficultyLabel(week.difficulty)}
                            </Badge>
                            <span className="text-xs text-muted-foreground">Week {week.week}</span>
                          </div>
                          <CardTitle className="text-lg">{week.title}</CardTitle>
                        </div>
                        <div className="ml-2">
                          {isCompleted ? (
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                          ) : (
                            <Circle className="w-6 h-6 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{week.description}</p>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-1">Project:</p>
                          <p className="text-sm text-primary">{week.project}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-1">Objectives:</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {week.objectives.slice(0, 2).map((obj, idx) => (
                              <li key={idx}>• {obj}</li>
                            ))}
                            {week.objectives.length > 2 && (
                              <li>• and {week.objectives.length - 2} more</li>
                            )}
                          </ul>
                        </div>
                      </div>
                      {(week.resources.arabic || week.resources.english) && (
                        <div className="mt-3 pt-3 border-t border-border">
                          <div className="flex gap-2 flex-wrap">
                            {week.resources.arabic && (
                              <a
                                href={week.resources.arabic}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-primary hover:underline flex items-center gap-1"
                              >
                                Arabic <ArrowRight className="w-3 h-3" />
                              </a>
                            )}
                            {week.resources.english && (
                              <a
                                href={week.resources.english}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-primary hover:underline flex items-center gap-1"
                              >
                                English <ArrowRight className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Specialization Tab */}
          <TabsContent value="specialization" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specializationPaths.map((path) => {
                const iconMap: Record<string, React.ReactNode> = {
                  'red-team': <Zap className="w-8 h-8" />,
                  'blue-team': <Shield className="w-8 h-8" />,
                  'cloud-security': <Cloud className="w-8 h-8" />
                };

                return (
                  <Card key={path.id} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className={`h-1 bg-gradient-to-r ${path.color}`} />
                    <CardHeader>
                      <div className="flex items-start gap-3 mb-2">
                        <div className="text-primary">{iconMap[path.id]}</div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{path.name}</CardTitle>
                          <CardDescription className="text-sm mt-1">{path.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-2">Duration:</p>
                        <p className="text-sm text-muted-foreground">{path.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-2">Projects:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {path.projects.map((project, idx) => (
                            <li key={idx}>• {project}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground mb-2">Certifications:</p>
                        <div className="flex flex-wrap gap-2">
                          {path.certifications.map((cert, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-4">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Free Learning Resources</CardTitle>
                <CardDescription>All resources used in this plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Training Platforms:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="https://tryhackme.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          TryHackMe - Practical challenges for beginners
                        </a>
                      </li>
                      <li>
                        <a href="https://picoctf.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          PicoCTF - Capture The Flag challenges
                        </a>
                      </li>
                      <li>
                        <a href="https://overthewire.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          OverTheWire - Bandit and Wargames
                        </a>
                      </li>
                      <li>
                        <a href="https://blueteamlabs.online" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Blue Team Labs - Defensive training
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Free Certifications:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="https://www.isc2.org/landing/1mcc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          ISC2 Certified in Cybersecurity (CC)
                        </a>
                      </li>
                      <li>
                        <a href="https://www.coursera.org/professional-certificates/google-cybersecurity" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Google Cybersecurity Professional Certificate
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
