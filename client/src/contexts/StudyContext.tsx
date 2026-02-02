import React, { createContext, useContext, useState, useEffect } from 'react';

export interface WeekNote {
  weekNumber: number;
  content: string;
  lastUpdated: string;
}

export interface StudyData {
  completedWeeks: number[];
  notes: WeekNote[];
  dailyHours: number;
  startDate: string;
}

interface StudyContextType {
  completedWeeks: number[];
  notes: WeekNote[];
  dailyHours: number;
  startDate: string;
  toggleWeekCompletion: (weekNumber: number) => void;
  saveNote: (weekNumber: number, content: string) => void;
  getNote: (weekNumber: number) => string | undefined;
  deleteNote: (weekNumber: number) => void;
  setDailyHours: (hours: number) => void;
  setStartDate: (date: string) => void;
  resetAllData: () => void;
}

const StudyContext = createContext<StudyContextType | undefined>(undefined);

const STORAGE_KEY = 'cybersecurity_study_data';

const defaultData: StudyData = {
  completedWeeks: [],
  notes: [],
  dailyHours: 2,
  startDate: new Date().toISOString().split('T')[0]
};

export function StudyProvider({ children }: { children: React.ReactNode }) {
  const [studyData, setStudyData] = useState<StudyData>(defaultData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        setStudyData(JSON.parse(savedData));
      } catch (error) {
        console.error('Failed to load study data:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(studyData));
    }
  }, [studyData, isLoaded]);

  const toggleWeekCompletion = (weekNumber: number) => {
    setStudyData(prev => ({
      ...prev,
      completedWeeks: prev.completedWeeks.includes(weekNumber)
        ? prev.completedWeeks.filter(w => w !== weekNumber)
        : [...prev.completedWeeks, weekNumber]
    }));
  };

  const saveNote = (weekNumber: number, content: string) => {
    setStudyData(prev => {
      const existingNoteIndex = prev.notes.findIndex(n => n.weekNumber === weekNumber);
      const newNotes = [...prev.notes];
      
      if (existingNoteIndex >= 0) {
        newNotes[existingNoteIndex] = {
          weekNumber,
          content,
          lastUpdated: new Date().toISOString()
        };
      } else {
        newNotes.push({
          weekNumber,
          content,
          lastUpdated: new Date().toISOString()
        });
      }
      
      return {
        ...prev,
        notes: newNotes
      };
    });
  };

  const getNote = (weekNumber: number): string | undefined => {
    return studyData.notes.find(n => n.weekNumber === weekNumber)?.content;
  };

  const deleteNote = (weekNumber: number) => {
    setStudyData(prev => ({
      ...prev,
      notes: prev.notes.filter(n => n.weekNumber !== weekNumber)
    }));
  };

  const setDailyHours = (hours: number) => {
    setStudyData(prev => ({
      ...prev,
      dailyHours: hours
    }));
  };

  const setStartDate = (date: string) => {
    setStudyData(prev => ({
      ...prev,
      startDate: date
    }));
  };

  const resetAllData = () => {
    setStudyData(defaultData);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <StudyContext.Provider
      value={{
        completedWeeks: studyData.completedWeeks,
        notes: studyData.notes,
        dailyHours: studyData.dailyHours,
        startDate: studyData.startDate,
        toggleWeekCompletion,
        saveNote,
        getNote,
        deleteNote,
        setDailyHours,
        setStartDate,
        resetAllData
      }}
    >
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  const context = useContext(StudyContext);
  if (context === undefined) {
    throw new Error('useStudy must be used within a StudyProvider');
  }
  return context;
}
