import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Check } from 'lucide-react';

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [newHabitName, setNewHabitName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Load habits from storage on mount
  useEffect(() => {
    loadHabits();
  }, []);

  // Save habits whenever they change
  useEffect(() => {
    if (!isLoading) {
      saveHabits();
    }
  }, [habits, isLoading]);

  const loadHabits = async () => {
    try {
      const result = await window.storage.get('habits');
      if (result && result.value) {
        setHabits(JSON.parse(result.value));
      }
    } catch (error) {
      console.log('No existing habits found, starting fresh');
    } finally {
      setIsLoading(false);
    }
  };

  const saveHabits = async () => {
    try {
      await window.storage.set('habits', JSON.stringify(habits));
    } catch (error) {
      console.error('Error saving habits:', error);
    }
  };

  const addHabit = () => {
    if (newHabitName.trim()) {
      const newHabit = {
        id: Date.now(),
        name: newHabitName.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setHabits([...habits, newHabit]);
      setNewHabitName('');
    }
  };

  const toggleHabit = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addHabit();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Habit Tracker</h1>
          <p className="text-gray-600">Build better habits, one day at a time</p>
        </div>

        {/* Add Habit Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Add a new habit (e.g., Drink water, Go for a run)"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={addHabit}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Plus size={20} />
              Add
            </button>
          </div>
        </div>

        {/* Habits List */}
        <div className="space-y-3">
          {habits.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500">No habits yet. Add your first habit above!</p>
            </div>
          ) : (
            habits.map((habit) => (
              <div
                key={habit.id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-shadow"
              >
                {/* Checkbox */}
                <button
                  onClick={() => toggleHabit(habit.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                    habit.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300 hover:border-purple-500'
                  }`}
                >
                  {habit.completed && <Check size={16} className="text-white" />}
                </button>

                {/* Habit Name */}
                <span
                  className={`flex-1 text-lg ${
                    habit.completed
                      ? 'line-through text-gray-400'
                      : 'text-gray-800'
                  }`}
                >
                  {habit.name}
                </span>

                {/* Delete Button */}
                <button
                  onClick={() => deleteHabit(habit.id)}
                  className="text-red-500 hover:text-red-700 transition-colors p-2"
                  title="Delete habit"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Stats */}
        {habits.length > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow-md p-4">
            <div className="text-center">
              <span className="text-gray-600">
                Completed today: {' '}
                <span className="font-bold text-purple-600">
                  {habits.filter(h => h.completed).length} / {habits.length}
                </span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}