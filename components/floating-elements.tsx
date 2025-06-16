"use client";

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Circles */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-black rounded-full animate-float opacity-20" />
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-gray-400 rounded-full animate-float opacity-30"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-3 h-3 bg-black rounded-full animate-float opacity-25"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-5 h-5 bg-gray-600 rounded-full animate-float opacity-20"
        style={{ animationDelay: "3s" }}
      />

      {/* Floating Squares */}
      <div className="absolute top-60 left-1/4 w-4 h-4 bg-black rotate-45 animate-pulse-slow opacity-15" />
      <div
        className="absolute bottom-60 right-1/4 w-6 h-6 bg-gray-500 rotate-45 animate-pulse-slow opacity-20"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Lines */}
      <div className="absolute top-1/3 left-0 w-20 h-px bg-gradient-to-r from-transparent via-black to-transparent opacity-30 animate-pulse-slow" />
      <div
        className="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-gray-600 to-transparent opacity-25 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}
