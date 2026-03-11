import React, { useState, useEffect } from 'react';
import { Plus, Trash2, ChevronLeft, ChevronRight, Trophy, Star, Award, Clock, Bell, BellOff, TrendingUp, BarChart3, Calendar, ArrowRight, User, Target, CheckCircle2, List, Play, Pause, RotateCcw, Droplet, Pill, Footprints, Home, LogOut, Users } from 'lucide-react';

// Simple password hashing function
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

export default function CompleteHabitTrackerWithDashboard() {
  // App state
  const [currentPage, setCurrentPage] = useState('userSelect'); // 'userSelect', 'registration', 'welcome', 'habitList', 'tracker', 'dashboard', 'calendar'
  const [currentUserId, setCurrentUserId] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [loginPassword, setLoginPassword] = useState('');
  const [selectedLoginUser, setSelectedLoginUser] = useState(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  
  // Health notifications
  const [waterNotificationsEnabled, setWaterNotificationsEnabled] = useState(false);
  const [supplementNotificationsEnabled, setSupplementNotificationsEnabled] = useState(false);
  const [walkNotificationsEnabled, setWalkNotificationsEnabled] = useState(false);
  const [lastWaterNotification, setLastWaterNotification] = useState(null);
  const [todaySupplementTaken, setTodaySupplementTaken] = useState(false);
  const [todayWalkDone, setTodayWalkDone] = useState(false);
  
  // Walk timer
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerTarget, setTimerTarget] = useState(30 * 60); // 30 minutes default
  
  // Habit tracking state
  const [habits, setHabits] = useState([]);
  const [newHabitName, setNewHabitName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [viewMode, setViewMode] = useState('month');
  const [showCelebration, setShowCelebration] = useState(false);
  const [remindersEnabled, setRemindersEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState('20:00');
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [analyticsView, setAnalyticsView] = useState('week');
  const [selectedHabit, setSelectedHabit] = useState(null);

  const year = 2026;
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const avatars = [
    '👨', '👩', '🧑', '👦', '👧', '🧔', '👴', '👵',
    '🦸', '🦹', '🧙', '🧚', '🧛', '🧜', '🧝', '🧞',
    '🐶', '🐱', '🐼', '🐨', '🦊', '🦁', '🐯', '🐸',
    '🌟', '⚡', '🔥', '💎', '🎯', '🏆', '👑', '💪'
  ];

  useEffect(() => {
    loadData();
    checkHealthNotifications();
    const interval = setInterval(checkHealthNotifications, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      saveData();
    }
  }, [habits, userName, userEmail, userAvatar, waterNotificationsEnabled, supplementNotificationsEnabled, walkNotificationsEnabled, todaySupplementTaken, todayWalkDone, isLoading]);

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const loadData = async () => {
    try {
      // Load all users
      const usersResult = await window.storage.get('all-users');
      if (usersResult && usersResult.value) {
        setAllUsers(JSON.parse(usersResult.value));
      }

      // Load current user data if logged in
      if (currentUserId) {
        const userKey = `user-${currentUserId}`;
        const result = await window.storage.get(userKey);
        if (result && result.value) {
          const data = JSON.parse(result.value);
          setHabits(data.habits || []);
          setUserName(data.userName || '');
          setUserEmail(data.userEmail || '');
          setUserAvatar(data.userAvatar || '');
          setWaterNotificationsEnabled(data.waterNotificationsEnabled || false);
          setSupplementNotificationsEnabled(data.supplementNotificationsEnabled || false);
          setWalkNotificationsEnabled(data.walkNotificationsEnabled || false);
          setTodaySupplementTaken(data.todaySupplementTaken || false);
          setTodayWalkDone(data.todayWalkDone || false);
        }
      }
    } catch (error) {
      console.log('No existing data found, starting fresh');
    } finally {
      setIsLoading(false);
    }
  };

  const saveData = async () => {
    try {
      if (currentUserId) {
        const userKey = `user-${currentUserId}`;
        await window.storage.set(userKey, JSON.stringify({
          habits,
          userName,
          userEmail,
          userAvatar,
          waterNotificationsEnabled,
          supplementNotificationsEnabled,
          walkNotificationsEnabled,
          todaySupplementTaken,
          todayWalkDone
        }));
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const checkHealthNotifications = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Water notification every hour
    if (waterNotificationsEnabled && currentMinute === 0) {
      const lastNotif = lastWaterNotification ? new Date(lastWaterNotification).getHours() : -1;
      if (lastNotif !== currentHour) {
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification('💧 Hydration Reminder', {
            body: 'Time to drink water! Stay hydrated.',
            icon: '💧'
          });
        }
        setLastWaterNotification(new Date().toISOString());
      }
    }
    
    // Supplement notification once daily at 9 AM
    if (supplementNotificationsEnabled && currentHour === 9 && currentMinute === 0 && !todaySupplementTaken) {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('💊 Supplement Reminder', {
          body: 'Don\'t forget to take your daily supplements!',
          icon: '💊'
        });
      }
    }
    
    // Walk notification at 6 PM
    if (walkNotificationsEnabled && currentHour === 18 && currentMinute === 0 && !todayWalkDone) {
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('🚶 Walking Reminder', {
          body: 'Time for your evening walk!',
          icon: '🚶'
        });
      }
    }
  };

  const requestNotificationPermission = async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      await Notification.requestPermission();
    }
  };

  const handleRegistration = async () => {
    if (userName.trim() && userPassword.trim()) {
      if (userPassword.length < 4) {
        setPasswordError('Password must be at least 4 characters');
        return;
      }

      try {
        const passwordHash = await hashPassword(userPassword);
        const userId = Date.now().toString();
        
        // Create new user
        const newUser = {
          id: userId,
          userName: userName.trim(),
          userEmail: userEmail.trim(),
          userAvatar: userAvatar,
          passwordHash: passwordHash,
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString()
        };

        // Add to users list
        const updatedUsers = [...allUsers, newUser];
        await window.storage.set('all-users', JSON.stringify(updatedUsers));
        setAllUsers(updatedUsers);

        // Set as current user
        setCurrentUserId(userId);
        setUserPassword('');
        setPasswordError('');
        setCurrentPage('welcome');
      } catch (error) {
        console.error('Error registering:', error);
        setPasswordError('Error creating account. Please try again.');
      }
    } else {
      setPasswordError('Name and password are required');
    }
  };

  const handleUserSelect = (user) => {
    setSelectedLoginUser(user);
    setShowPasswordModal(true);
    setLoginPassword('');
    setPasswordError('');
  };

  const handlePasswordLogin = async () => {
    if (!loginPassword.trim()) {
      setPasswordError('Please enter your password');
      return;
    }

    try {
      const passwordHash = await hashPassword(loginPassword);
      
      if (passwordHash === selectedLoginUser.passwordHash) {
        // Update last login
        const updatedUsers = allUsers.map(u => 
          u.id === selectedLoginUser.id 
            ? { ...u, lastLogin: new Date().toISOString() }
            : u
        );
        await window.storage.set('all-users', JSON.stringify(updatedUsers));
        setAllUsers(updatedUsers);

        setCurrentUserId(selectedLoginUser.id);
        setShowPasswordModal(false);
        setLoginPassword('');
        setPasswordError('');
        
        // Load user data
        const userKey = `user-${selectedLoginUser.id}`;
        const result = await window.storage.get(userKey);
        if (result && result.value) {
          const data = JSON.parse(result.value);
          setHabits(data.habits || []);
          setUserName(data.userName || selectedLoginUser.userName);
          setUserEmail(data.userEmail || selectedLoginUser.userEmail);
          setUserAvatar(data.userAvatar || selectedLoginUser.userAvatar);
          setWaterNotificationsEnabled(data.waterNotificationsEnabled || false);
          setSupplementNotificationsEnabled(data.supplementNotificationsEnabled || false);
          setWalkNotificationsEnabled(data.walkNotificationsEnabled || false);
          setTodaySupplementTaken(data.todaySupplementTaken || false);
          setTodayWalkDone(data.todayWalkDone || false);
        } else {
          setUserName(selectedLoginUser.userName);
          setUserEmail(selectedLoginUser.userEmail);
          setUserAvatar(selectedLoginUser.userAvatar);
        }
        
        setCurrentPage('habitList');
      } else {
        setPasswordError('Incorrect password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setPasswordError('Login error. Please try again.');
    }
  };

  const handleLogout = () => {
    setCurrentUserId(null);
    setUserName('');
    setUserEmail('');
    setUserAvatar('');
    setHabits([]);
    setCurrentPage('userSelect');
  };

  const handleDeleteUser = async (user, event) => {
    event.stopPropagation();
    
    const password = prompt('Enter password to delete this account:');
    if (!password) return;
    
    try {
      const passwordHash = await hashPassword(password);
      
      if (passwordHash === user.passwordHash) {
        if (confirm('Are you sure you want to delete this account and all data? This cannot be undone.')) {
          // Remove user from list
          const updatedUsers = allUsers.filter(u => u.id !== user.id);
          await window.storage.set('all-users', JSON.stringify(updatedUsers));
          setAllUsers(updatedUsers);

          // Delete user data
          try {
            await window.storage.delete(`user-${user.id}`);
          } catch (e) {
            console.log('User data already deleted');
          }

          if (currentUserId === user.id) {
            handleLogout();
          }
        }
      } else {
        alert('Incorrect password. Account not deleted.');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting account. Please try again.');
    }
  };

  const addHabit = () => {
    if (newHabitName.trim()) {
      const newHabit = {
        id: Date.now(),
        name: newHabitName.trim(),
        completedDates: {},
        createdAt: new Date().toISOString()
      };
      setHabits([...habits, newHabit]);
      setNewHabitName('');
    }
  };

  const getTodayDateString = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  };

  const isDateInFuture = (dateString) => {
    const checkDate = new Date(dateString + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return checkDate > today;
  };

  const isDateBeforeHabitCreation = (dateString, habitCreatedAt) => {
    const checkDate = new Date(dateString + 'T00:00:00');
    const creationDate = new Date(habitCreatedAt);
    creationDate.setHours(0, 0, 0, 0);
    return checkDate < creationDate;
  };

  const toggleHabitForDate = (habitId, dateString) => {
    if (isDateInFuture(dateString)) {
      alert('You cannot mark future dates! Focus on today. 📅');
      return;
    }

    const habit = habits.find(h => h.id === habitId);
    
    if (isDateBeforeHabitCreation(dateString, habit.createdAt)) {
      alert('This date is before you created this habit! ⏰');
      return;
    }

    const updatedHabits = habits.map(h => {
      if (h.id === habitId) {
        const newCompletedDates = { ...h.completedDates };
        if (newCompletedDates[dateString]) {
          delete newCompletedDates[dateString];
        } else {
          newCompletedDates[dateString] = {
            completed: true,
            timestamp: new Date().toISOString()
          };
        }
        return { ...h, completedDates: newCompletedDates };
      }
      return h;
    });

    setHabits(updatedHabits);

    const today = getTodayDateString();
    if (dateString === today) {
      const allComplete = updatedHabits.every(h => h.completedDates[today]);
      if (allComplete && updatedHabits.length > 0) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 5000);
      }
    }
  };

  const deleteHabit = (id) => {
    if (confirm('Are you sure you want to delete this habit?')) {
      setHabits(habits.filter(habit => habit.id !== id));
      if (selectedHabit?.id === id) {
        setSelectedHabit(null);
        setCurrentPage('habitList');
      }
    }
  };

  const getDaysInMonth = (month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month) => {
    return new Date(year, month, 1).getDay();
  };

  const getDateString = (month, day) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const getMonthlyStats = (habit, month) => {
    const daysInMonth = getDaysInMonth(month);
    let completed = 0;
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = getDateString(month, day);
      if (habit.completedDates[dateString]) {
        completed++;
      }
    }
    
    return {
      completed,
      total: daysInMonth,
      percentage: Math.round((completed / daysInMonth) * 100)
    };
  };

  const getWeeklyStats = (habit, month, weekStart) => {
    let completed = 0;
    let total = 0;
    
    for (let day = weekStart; day < weekStart + 7 && day <= getDaysInMonth(month); day++) {
      total++;
      const dateString = getDateString(month, day);
      if (habit.completedDates[dateString]) {
        completed++;
      }
    }
    
    return { completed, total, allComplete: completed === total && total > 0 };
  };

  const getAllHabitsCompletedForDay = (month, day) => {
    if (habits.length === 0) return false;
    
    const dateString = getDateString(month, day);
    return habits.every(habit => habit.completedDates[dateString]);
  };

  const getYearlyStats = (habit) => {
    const completed = Object.keys(habit.completedDates).length;
    return {
      completed,
      total: 365,
      percentage: Math.round((completed / 365) * 100)
    };
  };

  const getWeeksInMonth = (month) => {
    const daysInMonth = getDaysInMonth(month);
    const firstDay = getFirstDayOfMonth(month);
    return Math.ceil((daysInMonth + firstDay) / 7);
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (currentPage === 'registration') {
        handleRegistration();
      } else {
        addHabit();
      }
    }
  };

  const canMarkDate = (dateString, habitCreatedAt) => {
    return !isDateInFuture(dateString) && !isDateBeforeHabitCreation(dateString, habitCreatedAt);
  };

  const getTodayProgress = () => {
    if (habits.length === 0) return { completed: 0, total: 0, percentage: 0 };
    const today = getTodayDateString();
    const completed = habits.filter(h => h.completedDates[today]).length;
    return {
      completed,
      total: habits.length,
      percentage: Math.round((completed / habits.length) * 100)
    };
  };

  const getCurrentWeekStats = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const weekDates = [];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() - dayOfWeek + i);
      weekDates.push(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`);
    }
    
    let completed = 0;
    let total = habits.length * 7;
    
    weekDates.forEach(dateString => {
      habits.forEach(habit => {
        if (habit.completedDates[dateString]) completed++;
      });
    });
    
    return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  const getCurrentMonthStats = () => {
    const now = new Date();
    const month = now.getMonth();
    const daysInMonth = getDaysInMonth(month);
    
    let completed = 0;
    let total = habits.length * daysInMonth;
    
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = getDateString(month, day);
      habits.forEach(habit => {
        if (habit.completedDates[dateString]) completed++;
      });
    }
    
    return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  const getYearStats = () => {
    let completed = 0;
    let total = habits.length * 365;
    
    habits.forEach(habit => {
      completed += Object.keys(habit.completedDates).length;
    });
    
    return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-emerald-600 text-lg">Loading...</div>
      </div>
    );
  }

  // User Selection Page
  if (currentPage === 'userSelect') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-4 shadow-lg">
              <Users size={40} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Habit Tracker</h1>
            <p className="text-gray-600 text-lg">Select a user or create a new account</p>
          </div>

          {/* Existing Users */}
          {allUsers.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Existing Users</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allUsers.map(user => (
                  <div
                    key={user.id}
                    onClick={() => handleUserSelect(user)}
                    className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-100 hover:border-emerald-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-3xl shadow-lg">
                          {user.userAvatar || '👤'}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{user.userName}</h3>
                          <p className="text-sm text-gray-600">{user.userEmail || 'No email'}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Last login: {new Date(user.lastLogin).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => handleDeleteUser(user, e)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Create New User */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-emerald-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create New User</h2>
            <button
              onClick={() => setCurrentPage('registration')}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Plus size={24} />
              Add New User
            </button>
          </div>

          {/* Database Info */}
          <div className="mt-6 bg-white rounded-xl shadow-lg p-4 border-2 border-emerald-100">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-emerald-500" />
                <span>{allUsers.length} user(s) registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Target size={16} className="text-teal-500" />
                <span>Data stored locally in browser</span>
              </div>
            </div>
          </div>
        </div>

        {/* Password Login Modal */}
        {showPasswordModal && selectedLoginUser && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => {
              setShowPasswordModal(false);
              setPasswordError('');
            }}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
                  {selectedLoginUser.userAvatar || '👤'}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
                <p className="text-gray-600">{selectedLoginUser.userName}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Enter Password</label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handlePasswordLogin()}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-800"
                    autoFocus
                  />
                  {passwordError && (
                    <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                  )}
                </div>

                <button
                  onClick={handlePasswordLogin}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg"
                >
                  Login
                </button>

                <button
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPasswordError('');
                  }}
                  className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Registration Page
  if (currentPage === 'registration') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-emerald-100">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setCurrentPage('userSelect')}
                className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
              >
                <ChevronLeft size={20} />
                Back
              </button>
              <h2 className="text-2xl font-bold text-gray-800">New User</h2>
              <div className="w-16"></div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-4 shadow-lg">
                <Target size={40} className="text-white" />
              </div>
              <p className="text-gray-600">Create your habit tracking account</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-800 placeholder-gray-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email (Optional)</label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password *</label>
                <input
                  type="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Create a password (min 4 characters)"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-800 placeholder-gray-400"
                />
                <p className="text-xs text-gray-500 mt-1">Your password protects your habit data</p>
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Choose Avatar</label>
                <div className="grid grid-cols-8 gap-2">
                  {avatars.slice(0, 16).map((avatar, index) => (
                    <button
                      key={index}
                      onClick={() => setUserAvatar(avatar)}
                      className={`text-2xl p-2 rounded-lg hover:bg-emerald-50 transition-all ${
                        userAvatar === avatar ? 'bg-emerald-100 ring-2 ring-emerald-500' : ''
                      }`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleRegistration}
                disabled={!userName.trim() || !userPassword.trim()}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Create Account
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Welcome Page
  if (currentPage === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12 border-2 border-emerald-100">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-lg animate-bounce">
                <Star size={48} className="text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome, {userName}! 🎉
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your journey to better habits starts now
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                <div className="text-3xl font-bold text-emerald-600">0</div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200">
                <div className="text-3xl font-bold text-teal-600">0</div>
                <div className="text-sm text-gray-600">Habits</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-4 border border-cyan-200">
                <div className="text-3xl font-bold text-cyan-600">0%</div>
                <div className="text-sm text-gray-600">Complete</div>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('habitList')}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto"
            >
              Start Tracking Habits
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Habit List Page
  if (currentPage === 'habitList') {
    const todayProgress = getTodayProgress();

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with Navigation */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-emerald-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-3xl cursor-pointer hover:scale-110 transition-all shadow-lg"
                  onClick={() => setShowAvatarPicker(true)}
                >
                  {userAvatar || '👤'}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">Hello, {userName}!</h1>
                  <p className="text-gray-600">Let's build great habits today</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage('calendar')}
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-teal-600 hover:to-cyan-700 transition-all flex items-center gap-2 font-semibold shadow-lg"
                >
                  <Calendar size={20} />
                  Calendar
                </button>
                <button
                  onClick={() => setCurrentPage('dashboard')}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all flex items-center gap-2 font-semibold shadow-lg"
                >
                  <BarChart3 size={20} />
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-all flex items-center gap-2 font-semibold shadow-lg"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full transition-all"
                style={{ width: `${todayProgress.percentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {todayProgress.completed} of {todayProgress.total} habits completed ({todayProgress.percentage}%)
            </p>
          </div>

          {/* Add New Habit */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-emerald-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Habit</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={newHabitName}
                onChange={(e) => setNewHabitName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="e.g., Drink 8 glasses of water, Exercise for 30 minutes"
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={addHabit}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all flex items-center gap-2 font-semibold shadow-lg"
              >
                <Plus size={20} />
                Add
              </button>
            </div>
          </div>

          {/* Habits List */}
          <div className="space-y-4">
            {habits.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center border-2 border-emerald-100">
                <Target size={64} className="mx-auto mb-4 text-emerald-500" />
                <p className="text-gray-500 text-lg">No habits yet. Add your first habit above!</p>
              </div>
            ) : (
              habits.map((habit) => {
                const today = getTodayDateString();
                const isCompletedToday = !!habit.completedDates[today];
                const yearStats = getYearlyStats(habit);

                return (
                  <div
                    key={habit.id}
                    className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-100 hover:border-emerald-300 transition-all cursor-pointer"
                    onClick={() => {
                      setSelectedHabit(habit);
                      setCurrentPage('tracker');
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleHabitForDate(habit.id, today);
                            }}
                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                              isCompletedToday
                                ? 'bg-gradient-to-br from-emerald-500 to-teal-600 border-emerald-500'
                                : 'border-gray-300 hover:border-emerald-500'
                            }`}
                          >
                            {isCompletedToday && <CheckCircle2 size={20} className="text-white" />}
                          </button>
                          <h3 className="text-xl font-semibold text-gray-800">{habit.name}</h3>
                        </div>
                        <div className="ml-11">
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                            <div
                              className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all"
                              style={{ width: `${yearStats.percentage}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-gray-600">
                            {yearStats.completed} days completed ({yearStats.percentage}% of year)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteHabit(habit.id);
                          }}
                          className="p-2 text-gray-400 hover:text-red-500 transition-all"
                        >
                          <Trash2 size={20} />
                        </button>
                        <ArrowRight size={24} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Avatar Picker Modal */}
        {showAvatarPicker && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowAvatarPicker(false)}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Your Avatar</h2>
              <div className="grid grid-cols-8 gap-3 mb-6">
                {avatars.map((avatar, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setUserAvatar(avatar);
                      setShowAvatarPicker(false);
                    }}
                    className={`text-3xl p-3 rounded-xl hover:bg-emerald-50 transition-all ${
                      userAvatar === avatar ? 'bg-emerald-100 ring-2 ring-emerald-500' : ''
                    }`}
                  >
                    {avatar}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowAvatarPicker(false)}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-300 transition-all font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Dashboard Page
  if (currentPage === 'dashboard') {
    const weekStats = getCurrentWeekStats();
    const monthStats = getCurrentMonthStats();
    const yearStats = getYearStats();
    const todayProgress = getTodayProgress();

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setCurrentPage('habitList')}
              className="bg-white text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2 font-semibold shadow-lg border-2 border-emerald-100"
            >
              <ChevronLeft size={20} />
              Back to Habits
            </button>
            <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
            <div className="w-24"></div>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-emerald-100">
            <div className="flex items-center gap-4">
              <div 
                className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-4xl cursor-pointer hover:scale-110 transition-all shadow-lg"
                onClick={() => setShowAvatarPicker(true)}
              >
                {userAvatar || '👤'}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800">{userName}</h2>
                <p className="text-gray-600">{userEmail || 'No email provided'}</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-emerald-600">{todayProgress.percentage}%</div>
                <div className="text-sm text-gray-600">Today's Progress</div>
              </div>
            </div>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-700">This Week</h3>
                <Calendar className="text-emerald-500" size={24} />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">{weekStats.percentage}%</div>
              <p className="text-gray-600">{weekStats.completed} / {weekStats.total} completed</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all"
                  style={{ width: `${weekStats.percentage}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-teal-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-700">This Month</h3>
                <BarChart3 className="text-teal-500" size={24} />
              </div>
              <div className="text-4xl font-bold text-teal-600 mb-2">{monthStats.percentage}%</div>
              <p className="text-gray-600">{monthStats.completed} / {monthStats.total} completed</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 h-2 rounded-full transition-all"
                  style={{ width: `${monthStats.percentage}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-cyan-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-700">This Year</h3>
                <Trophy className="text-cyan-500" size={24} />
              </div>
              <div className="text-4xl font-bold text-cyan-600 mb-2">{yearStats.percentage}%</div>
              <p className="text-gray-600">{yearStats.completed} / {yearStats.total} completed</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${yearStats.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Health Reminders */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Health Reminders</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Water Reminder */}
              <div className="border-2 border-emerald-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Droplet className="text-blue-500" size={32} />
                    <div>
                      <h4 className="font-bold text-gray-800">Water</h4>
                      <p className="text-xs text-gray-600">Every hour</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      requestNotificationPermission();
                      setWaterNotificationsEnabled(!waterNotificationsEnabled);
                    }}
                    className={`p-2 rounded-lg transition-all ${
                      waterNotificationsEnabled
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {waterNotificationsEnabled ? <Bell size={20} /> : <BellOff size={20} />}
                  </button>
                </div>
                <p className="text-sm text-gray-600">Stay hydrated throughout the day</p>
              </div>

              {/* Supplement Reminder */}
              <div className="border-2 border-emerald-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Pill className="text-purple-500" size={32} />
                    <div>
                      <h4 className="font-bold text-gray-800">Supplement</h4>
                      <p className="text-xs text-gray-600">Daily at 9 AM</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      requestNotificationPermission();
                      setSupplementNotificationsEnabled(!supplementNotificationsEnabled);
                    }}
                    className={`p-2 rounded-lg transition-all ${
                      supplementNotificationsEnabled
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {supplementNotificationsEnabled ? <Bell size={20} /> : <BellOff size={20} />}
                  </button>
                </div>
                <button
                  onClick={() => setTodaySupplementTaken(!todaySupplementTaken)}
                  className={`w-full mt-2 py-2 rounded-lg font-semibold transition-all ${
                    todaySupplementTaken
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {todaySupplementTaken ? '✓ Taken Today' : 'Mark as Taken'}
                </button>
              </div>

              {/* Walk Reminder */}
              <div className="border-2 border-emerald-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Footprints className="text-emerald-500" size={32} />
                    <div>
                      <h4 className="font-bold text-gray-800">Walk</h4>
                      <p className="text-xs text-gray-600">Daily at 6 PM</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      requestNotificationPermission();
                      setWalkNotificationsEnabled(!walkNotificationsEnabled);
                    }}
                    className={`p-2 rounded-lg transition-all ${
                      walkNotificationsEnabled
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {walkNotificationsEnabled ? <Bell size={20} /> : <BellOff size={20} />}
                  </button>
                </div>
                <button
                  onClick={() => setTodayWalkDone(!todayWalkDone)}
                  className={`w-full mt-2 py-2 rounded-lg font-semibold transition-all ${
                    todayWalkDone
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {todayWalkDone ? '✓ Done Today' : 'Mark as Done'}
                </button>
              </div>
            </div>
          </div>

          {/* Walk Timer */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Walk Timer</h3>
            <div className="max-w-md mx-auto">
              <div className="text-7xl font-bold text-emerald-600 text-center mb-8">
                {formatTimer(timerSeconds)}
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => setTimerRunning(!timerRunning)}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg"
                >
                  {timerRunning ? <Pause size={32} /> : <Play size={32} />}
                </button>
                <button
                  onClick={() => {
                    setTimerRunning(false);
                    setTimerSeconds(0);
                  }}
                  className="bg-gray-200 text-gray-700 p-6 rounded-full hover:bg-gray-300 transition-all"
                >
                  <RotateCcw size={32} />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Target Duration:</span>
                  <select
                    value={timerTarget}
                    onChange={(e) => setTimerTarget(Number(e.target.value))}
                    className="px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500"
                  >
                    <option value={15 * 60}>15 minutes</option>
                    <option value={20 * 60}>20 minutes</option>
                    <option value={30 * 60}>30 minutes</option>
                    <option value={45 * 60}>45 minutes</option>
                    <option value={60 * 60}>60 minutes</option>
                  </select>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full transition-all"
                    style={{ width: `${Math.min((timerSeconds / timerTarget) * 100, 100)}%` }}
                  ></div>
                </div>
                
                <p className="text-center text-sm text-gray-600">
                  {timerSeconds >= timerTarget ? '🎉 Target Reached!' : `${Math.floor((timerTarget - timerSeconds) / 60)} minutes remaining`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Avatar Picker Modal */}
        {showAvatarPicker && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowAvatarPicker(false)}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Your Avatar</h2>
              <div className="grid grid-cols-8 gap-3 mb-6">
                {avatars.map((avatar, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setUserAvatar(avatar);
                      setShowAvatarPicker(false);
                    }}
                    className={`text-3xl p-3 rounded-xl hover:bg-emerald-50 transition-all ${
                      userAvatar === avatar ? 'bg-emerald-100 ring-2 ring-emerald-500' : ''
                    }`}
                  >
                    {avatar}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowAvatarPicker(false)}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-300 transition-all font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Calendar Page
  if (currentPage === 'calendar') {
    const today = new Date();
    const currentMonthNow = today.getMonth();

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setCurrentPage('habitList')}
              className="bg-white text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2 font-semibold shadow-lg border-2 border-emerald-100"
            >
              <ChevronLeft size={20} />
              Back to Habits
            </button>
            <h1 className="text-4xl font-bold text-gray-800">Calendar View</h1>
            <div className="w-32"></div>
          </div>

          {/* Month Navigation */}
          <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-emerald-100">
            <button
              onClick={() => setCurrentMonth(Math.max(0, currentMonth - 1))}
              disabled={currentMonth === 0}
              className="p-3 rounded-xl hover:bg-emerald-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-gray-700"
            >
              <ChevronLeft size={28} />
            </button>
            <h2 className="text-3xl font-bold text-gray-800">
              {months[currentMonth]} {year}
            </h2>
            <button
              onClick={() => setCurrentMonth(Math.min(11, currentMonth + 1))}
              disabled={currentMonth === 11}
              className="p-3 rounded-xl hover:bg-emerald-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-gray-700"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Legend */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-emerald-100">
            <h3 className="font-bold text-gray-800 mb-4">Legend</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg"></div>
                <span className="text-sm text-gray-700">All habits completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg"></div>
                <span className="text-sm text-gray-700">Some habits completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                <span className="text-sm text-gray-700">No habits completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300"></div>
                <span className="text-sm text-gray-700">Future day</span>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-emerald-100">
            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {daysOfWeek.map(day => (
                <div key={day} className="text-center font-bold text-gray-600 text-sm py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: getFirstDayOfMonth(currentMonth) }, (_, i) => (
                <div key={`empty-${i}`} className="aspect-square"></div>
              ))}
              
              {Array.from({ length: getDaysInMonth(currentMonth) }, (_, i) => {
                const day = i + 1;
                const dateString = getDateString(currentMonth, day);
                const isFuture = isDateInFuture(dateString);
                
                // Calculate completion for this day
                let completedCount = 0;
                habits.forEach(habit => {
                  if (habit.completedDates[dateString]) {
                    completedCount++;
                  }
                });
                
                const completionPercentage = habits.length > 0 ? (completedCount / habits.length) * 100 : 0;
                const allComplete = completedCount === habits.length && habits.length > 0;
                const someComplete = completedCount > 0 && completedCount < habits.length;
                const noneComplete = completedCount === 0;
                
                return (
                  <div key={day} className="relative group">
                    <div
                      className={`w-full aspect-square rounded-xl text-base font-bold transition-all relative flex flex-col items-center justify-center ${
                        isFuture
                          ? 'bg-gray-100 text-gray-400 border-2 border-dashed border-gray-300'
                          : allComplete
                          ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg cursor-pointer hover:from-emerald-600 hover:to-teal-700'
                          : someComplete
                          ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg cursor-pointer hover:from-amber-500 hover:to-orange-600'
                          : 'bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300'
                      }`}
                    >
                      <span className="text-lg">{day}</span>
                      {!isFuture && habits.length > 0 && (
                        <span className="text-xs mt-1">
                          {completedCount}/{habits.length}
                        </span>
                      )}
                    </div>
                    
                    {/* Hover Tooltip */}
                    {!isFuture && habits.length > 0 && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 max-w-xs">
                        <div className="font-bold mb-1">{months[currentMonth]} {day}</div>
                        {habits.map(habit => (
                          <div key={habit.id} className="flex items-center gap-1">
                            <span>{habit.completedDates[dateString] ? '✓' : '○'}</span>
                            <span className={habit.completedDates[dateString] ? 'text-green-300' : 'text-gray-400'}>
                              {habit.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Monthly Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Monthly Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {(() => {
                const daysInMonth = getDaysInMonth(currentMonth);
                let perfectDays = 0;
                let partialDays = 0;
                let incompleteDays = 0;
                
                for (let day = 1; day <= daysInMonth; day++) {
                  const dateString = getDateString(currentMonth, day);
                  if (!isDateInFuture(dateString)) {
                    let completedCount = 0;
                    habits.forEach(habit => {
                      if (habit.completedDates[dateString]) completedCount++;
                    });
                    
                    if (completedCount === habits.length && habits.length > 0) {
                      perfectDays++;
                    } else if (completedCount > 0) {
                      partialDays++;
                    } else {
                      incompleteDays++;
                    }
                  }
                }
                
                return (
                  <>
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border-2 border-emerald-200">
                      <div className="text-4xl font-bold text-emerald-600">{perfectDays}</div>
                      <div className="text-sm text-gray-700">Perfect Days</div>
                      <div className="text-xs text-gray-500 mt-1">All habits completed</div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border-2 border-amber-200">
                      <div className="text-4xl font-bold text-amber-600">{partialDays}</div>
                      <div className="text-sm text-gray-700">Partial Days</div>
                      <div className="text-xs text-gray-500 mt-1">Some habits completed</div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border-2 border-gray-200">
                      <div className="text-4xl font-bold text-gray-600">{incompleteDays}</div>
                      <div className="text-sm text-gray-700">Missed Days</div>
                      <div className="text-xs text-gray-500 mt-1">No habits completed</div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tracker Page (Calendar View)
  if (currentPage === 'tracker' && selectedHabit) {
    const monthStats = getMonthlyStats(selectedHabit, currentMonth);
    const yearStats = getYearlyStats(selectedHabit);

    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 px-4">
        {showCelebration && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md">
              <div className="text-8xl mb-6">🎉</div>
              <h2 className="text-4xl font-bold text-emerald-600 mb-4">Well Done!</h2>
              <p className="text-xl text-gray-700 mb-6">You've completed all your habits for today!</p>
              <p className="text-gray-500 mt-6">Keep up the great work!</p>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => {
                setSelectedHabit(null);
                setCurrentPage('habitList');
              }}
              className="bg-white text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2 font-semibold shadow-lg border-2 border-emerald-100"
            >
              <ChevronLeft size={20} />
              Back to Habits
            </button>
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-4 border-2 border-emerald-100">
              <h2 className="text-2xl font-bold text-gray-800">{selectedHabit.name}</h2>
              <div className="flex gap-6 text-sm mt-2">
                <p className="text-gray-600">
                  <span className="font-semibold">This Month:</span> {monthStats.completed}/{monthStats.total} days ({monthStats.percentage}%)
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Year Total:</span> {yearStats.completed}/{yearStats.total} days ({yearStats.percentage}%)
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-6 mb-6 border-2 border-emerald-100">
            <button
              onClick={() => setCurrentMonth(Math.max(0, currentMonth - 1))}
              disabled={currentMonth === 0}
              className="p-3 rounded-xl hover:bg-emerald-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-gray-700"
            >
              <ChevronLeft size={28} />
            </button>
            <h2 className="text-3xl font-bold text-gray-800">
              {months[currentMonth]} {year}
            </h2>
            <button
              onClick={() => setCurrentMonth(Math.min(11, currentMonth + 1))}
              disabled={currentMonth === 11}
              className="p-3 rounded-xl hover:bg-emerald-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-gray-700"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-emerald-100">
            <div className="grid grid-cols-7 gap-2 mb-2">
              {daysOfWeek.map(day => (
                <div key={day} className="text-center font-bold text-gray-600 text-sm py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: getFirstDayOfMonth(currentMonth) }, (_, i) => (
                <div key={`empty-${i}`} className="aspect-square"></div>
              ))}
              
              {Array.from({ length: getDaysInMonth(currentMonth) }, (_, i) => {
                const day = i + 1;
                const dateString = getDateString(currentMonth, day);
                const dateData = selectedHabit.completedDates[dateString];
                const isCompleted = !!dateData;
                const canMark = canMarkDate(dateString, selectedHabit.createdAt);
                const isFuture = isDateInFuture(dateString);
                const isBeforeCreation = isDateBeforeHabitCreation(dateString, selectedHabit.createdAt);
                
                return (
                  <div key={day} className="relative group">
                    <button
                      onClick={() => toggleHabitForDate(selectedHabit.id, dateString)}
                      disabled={!canMark}
                      className={`w-full aspect-square rounded-xl text-base font-bold transition-all relative ${
                        isCompleted
                          ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-lg'
                          : isFuture
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-2 border-dashed border-gray-300'
                          : isBeforeCreation
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 border-2 border-gray-200 hover:border-emerald-300 cursor-pointer'
                      }`}
                    >
                      {isCompleted && (
                        <span className="absolute top-1 right-1 text-sm">✓</span>
                      )}
                      <span>{day}</span>
                    </button>
                    
                    {isCompleted && dateData?.timestamp && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                        {formatTimestamp(dateData.timestamp)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t-2 border-gray-200">
              <h4 className="font-bold text-gray-700 mb-3">Weekly Goals</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Array.from({ length: getWeeksInMonth(currentMonth) }, (_, weekIndex) => {
                  const weekStart = weekIndex * 7 - getFirstDayOfMonth(currentMonth) + 1;
                  const weekStats = getWeeklyStats(selectedHabit, currentMonth, weekStart);
                  
                  return (
                    <div
                      key={weekIndex}
                      className={`p-3 rounded-xl text-center ${
                        weekStats.allComplete
                          ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 border-2 border-gray-200'
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1">Week {weekIndex + 1}</div>
                      <div className="text-lg font-bold">
                        {weekStats.completed}/{weekStats.total}
                        {weekStats.allComplete && <span className="ml-1">🏆</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}