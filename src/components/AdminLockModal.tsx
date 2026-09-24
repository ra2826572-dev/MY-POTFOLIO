import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Eye, EyeOff, X, ShieldAlert, KeyRound, LogIn, UserCheck } from 'lucide-react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, onAuthStateChanged, User } from 'firebase/auth';

interface AdminLockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  actionTitle?: string;
}

const ADMIN_PIN = '5911';
const OWNER_EMAIL = 'ra2826572@gmail.com';

export const AdminLockModal: React.FC<AdminLockModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  actionTitle = 'Admin Security Verification'
}) => {
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setPin('');
      setError(false);
      setErrorMessage('');
      setShowPin(false);
      setIsVerifying(false);
      // Auto focus input
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const verifyPin = (pinToTest: string) => {
    if (pinToTest === ADMIN_PIN) {
      setIsVerifying(true);
      setError(false);
      setErrorMessage('');
      setTimeout(() => {
        setIsVerifying(false);
        onSuccess();
        onClose();
      }, 300);
    } else {
      setError(true);
      setErrorMessage('Galat PIN! Sirf Authorized Admin (5911) he open kar sakta hai.');
      setPin('');
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user.email === OWNER_EMAIL) {
        onSuccess();
        onClose();
      } else {
        setErrorMessage('This Google account is not authorized as Admin.');
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Login failed. Please try again.');
      setError(true);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleKeypadPress = (num: string) => {
    if (pin.length < 4) {
      const nextPin = pin + num;
      setPin(nextPin);
      setError(false);
      if (nextPin.length === 4) {
        verifyPin(nextPin);
      }
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
    setError(false);
  };

  const handleClear = () => {
    setPin('');
    setError(false);
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length > 0) {
      verifyPin(pin);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-sm rounded-3xl bg-[#0B0F19] border border-slate-700/90 shadow-2xl shadow-black text-slate-100 p-6 sm:p-8 z-10"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Cancel"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col items-center text-center">
            {/* Lock Icon Badge */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-indigo-500/30 border border-blue-500/40 flex items-center justify-center mb-4 text-blue-400 shadow-inner">
              {isVerifying ? (
                <Unlock className="w-8 h-8 text-emerald-400 animate-bounce" />
              ) : (
                <Lock className="w-8 h-8 text-blue-400" />
              )}
            </div>

            <h3 className="text-xl font-extrabold text-white tracking-tight">
              Admin Lock Required
            </h3>
            
            <p className="text-xs text-slate-400 mt-1 max-w-[260px] leading-relaxed">
              {actionTitle}. Please enter your secret admin PIN or sign in with Google to continue.
            </p>

            {/* Google Auth Option */}
            <div className="w-full mt-6 flex flex-col gap-3">
              {user && user.email === OWNER_EMAIL ? (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div className="text-left overflow-hidden">
                      <p className="text-[10px] text-slate-400 font-medium">Logged in as Owner</p>
                      <p className="text-xs text-emerald-300 font-bold truncate">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      onSuccess();
                      onClose();
                    }}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold transition-colors"
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={isLoggingIn}
                  className="w-full py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2.5 transition-all active:scale-95 disabled:opacity-70"
                >
                  {isLoggingIn ? (
                    <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin" />
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  )}
                  <span>{isLoggingIn ? 'Connecting...' : 'Secure Sign in with Google'}</span>
                </button>
              )}

              <div className="flex items-center gap-3 my-1">
                <div className="h-[1px] flex-1 bg-slate-800" />
                <span className="text-[10px] font-bold text-slate-500 uppercase">OR USE PIN</span>
                <div className="h-[1px] flex-1 bg-slate-800" />
              </div>
            </div>

            {/* Hidden / Masked PIN Display Blocks */}
            <form onSubmit={handleSubmit} className="w-full mt-6">
              {/* Invisible input that captures physical keyboard */}
              <input
                ref={inputRef}
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                value={pin}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '').slice(0, 4);
                  setPin(val);
                  setError(false);
                  if (val.length === 4) {
                    verifyPin(val);
                  }
                }}
                className="sr-only"
                autoComplete="off"
              />

              {/* Visual 4-PIN Circles / Boxes */}
              <motion.div
                animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.35 }}
                onClick={() => inputRef.current?.focus()}
                className="flex items-center justify-center gap-3 cursor-pointer py-2"
              >
                {[0, 1, 2, 3].map((index) => {
                  const hasVal = pin.length > index;
                  const char = pin[index];
                  return (
                    <div
                      key={index}
                      className={`w-12 h-14 rounded-2xl flex items-center justify-center text-xl font-mono font-bold transition-all duration-200 border ${
                        error
                          ? 'border-red-500/80 bg-red-950/30 text-red-400'
                          : hasVal
                          ? 'border-blue-500 bg-blue-950/40 text-blue-300 shadow-md shadow-blue-500/20 scale-105'
                          : 'border-slate-800 bg-slate-900/80 text-slate-500'
                      }`}
                    >
                      {hasVal ? (
                        showPin ? char : '●'
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-700" />
                      )}
                    </div>
                  );
                })}
              </motion.div>

              {/* Show/Hide PIN Toggle (Keeping it hidden by default) */}
              <div className="flex items-center justify-center gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-slate-800/60 transition-colors"
                >
                  {showPin ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Hide PIN / Chupao</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" />
                      <span>Show PIN</span>
                    </>
                  )}
                </button>
              </div>

              {/* Error message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-xs font-semibold text-rose-400 flex items-center justify-center gap-1.5"
                >
                  <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                  <span>{errorMessage || 'Incorrect PIN'}</span>
                </motion.div>
              )}

              {/* Interactive Keypad */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mt-5 max-w-[260px] mx-auto">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
                  <button
                    key={digit}
                    type="button"
                    onClick={() => handleKeypadPress(digit)}
                    className="h-11 rounded-xl bg-slate-900/90 hover:bg-blue-600/30 hover:border-blue-500/50 border border-slate-800 text-lg font-mono font-bold text-slate-200 hover:text-white transition-all active:scale-95 shadow-sm"
                  >
                    {digit}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={handleClear}
                  className="h-11 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-400 hover:text-slate-200 transition-all active:scale-95"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => handleKeypadPress('0')}
                  className="h-11 rounded-xl bg-slate-900/90 hover:bg-blue-600/30 hover:border-blue-500/50 border border-slate-800 text-lg font-mono font-bold text-slate-200 hover:text-white transition-all active:scale-95 shadow-sm"
                >
                  0
                </button>
                <button
                  type="button"
                  onClick={handleBackspace}
                  className="h-11 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-400 hover:text-slate-200 transition-all active:scale-95 flex items-center justify-center"
                  title="Backspace"
                >
                  ⌫
                </button>
              </div>

              {/* Unlock Action Button */}
              <div className="mt-6 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={pin.length < 4 || isVerifying}
                  className={`w-full py-3 rounded-2xl text-xs sm:text-sm font-bold shadow-lg flex items-center justify-center gap-2 transition-all ${
                    pin.length === 4
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-blue-600/30 hover:scale-[1.02] active:scale-98 cursor-pointer'
                      : 'bg-slate-800/80 text-slate-500 border border-slate-800 cursor-not-allowed'
                  }`}
                >
                  <KeyRound className="w-4 h-4" />
                  <span>{isVerifying ? 'Verifying...' : 'Unlock Admin Mode'}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
                >
                  Cancel / Wapis Jayein
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
