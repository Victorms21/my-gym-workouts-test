/**
 * Represents a single set within an exercise
 */
export interface ExerciseSet {
  reps: number;
  weight?: number;
  restSeconds?: number;
}

/**
 * Represents an exercise within a routine
 */
export interface RoutineExercise {
  id: string;
  name: string;
  sets: ExerciseSet[];
  notes?: string;
}

/**
 * Represents a workout routine
 * This interface is used for type safety in the frontend,
 * even though routines are stored as JSON in the database
 */
export interface Routine {
  id: string;
  name: string;
  description?: string;
  exercises: RoutineExercise[];
  userId: string;
  /** ISO 8601 date string (e.g., "2024-01-15T10:30:00Z") */
  createdAt: string;
  /** ISO 8601 date string (e.g., "2024-01-15T10:30:00Z") */
  updatedAt: string;
}

/**
 * Exercise data for creating or updating routines (without ID)
 */
export interface RoutineExerciseInput {
  name: string;
  sets: ExerciseSet[];
  notes?: string;
}

/**
 * Request payload for creating a new routine
 */
export interface CreateRoutineRequest {
  name: string;
  description?: string;
  exercises: RoutineExerciseInput[];
}

/**
 * Request payload for updating an existing routine
 */
export interface UpdateRoutineRequest {
  name?: string;
  description?: string;
  exercises?: RoutineExerciseInput[];
}
