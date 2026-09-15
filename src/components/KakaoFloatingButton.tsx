import React, { useState } from 'react';
import { MessageCircle, Phone, X, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/restaurantData';

export const KakaoFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [templateCopied, setTemplateCopied] = useState(false);

  const kakaoNumber = '010-7795-0918';
  const kakaoOpenChatUrl = STORE_INFO.kakaoOpenChat || 'https://open.kakao.com/o/sA1kDDNi';

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(kakaoNumber.replace(/-/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyTemplate = () => {
    const text = `[어따써 숯불포차 사천점 카톡 문의]\n안녕하세요! 꼼장어 예약/자리 문의드립니다.\n- 성함:\n- 방문일시:\n- 인원수:\n- 문의사항:`;
    navigator.clipboard.writeText(text);
    setTemplateCopied(true);
    setTimeout(() => setTemplateCopied(false), 2500);
  };

  return (
    <>
      {/* Floating Kakao Button Container */}
      <div
        id="kakao-floating-container"
        className="fixed bottom-20 right-4 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end group select-none"
      >
        {/* Floating Tooltip with Golden Accent */}
        <div className="mb-2.5 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/95 border border-amber-400/40 text-[11px] font-bold text-amber-300 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-amber-300 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.6)] group-hover:text-amber-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>카톡 1:1 오픈채팅 문의</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-0.5" />
        </div>

        {/* Main KakaoTalk Button with Gold Hover Glow Effect */}
        <button
          id="kakao-floating-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="카카오톡 문의 열기"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FEE500] hover:bg-[#FFEB00] flex items-center justify-center cursor-pointer transition-all duration-300 ease-out transform group-hover:scale-110 group-hover:-translate-y-1 shadow-lg shadow-black/40 group-hover:shadow-[0_0_32px_rgba(251,191,36,0.95)] group-hover:ring-4 group-hover:ring-amber-300/80 group-hover:ring-offset-2 group-hover:ring-offset-neutral-950 border-2 border-transparent group-hover:border-amber-200"
        >
          {/* Golden Shimmer Halo overlay on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-400/0 via-amber-300/40 to-yellow-200/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* KakaoTalk Emblem SVG */}
          <div className="relative z-10 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
            <svg
              viewBox="0 0 256 256"
              className="w-full h-full drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#381E1F"
                d="M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"
              />
              <path
                fill="#FFE812"
                d="M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"
              />
            </svg>
          </div>

          {/* Red Notification Pill */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-neutral-950 rounded-full flex items-center justify-center text-[9px] font-bold text-white shadow">
            1
          </span>
        </button>
      </div>

      {/* Popover / Modal for Kakao Consultation Options */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:justify-end sm:p-8 p-4 animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-neutral-900 border-2 border-amber-400/60 shadow-[0_0_35px_rgba(245,158,11,0.35)] p-5 text-neutral-100 mb-16 sm:mb-0 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FEE500] flex items-center justify-center shrink-0 shadow-md p-1.5">
                <svg viewBox="0 0 256 256" className="w-full h-full" fill="none">
                  <path
                    fill="#381E1F"
                    d="M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"
                  />
                  <path
                    fill="#FFE812"
                    d="M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                  어따써 숯불포차 사천점
                </h4>
                <p className="text-xs text-amber-400 font-medium">
                  카카오톡 실시간 상담 & 오픈채팅
                </p>
              </div>
            </div>

            {/* Primary Action: 카카오톡 1:1 오픈채팅 바로가기 */}
            <div className="mb-4">
              <a
                href={kakaoOpenChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-[#FEE500] hover:bg-[#FFEB00] text-[#371D1E] font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 shrink-0">
                  <svg viewBox="0 0 256 256" className="w-full h-full" fill="none">
                    <path
                      fill="#381E1F"
                      d="M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"
                    />
                    <path
                      fill="#FFE812"
                      d="M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"
                    />
                  </svg>
                </div>
                <span>카카오톡 1:1 오픈채팅 상담하기</span>
                <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
              </a>
              <p className="text-[11px] text-amber-300/80 text-center mt-2">
                친구추가 없이 누르면 즉시 1:1 카카오톡 채팅방이 열립니다!
              </p>
            </div>

            {/* Sub Actions: 전화번호 및 양식 복사 */}
            <div className="space-y-2 mb-4 pt-1 border-t border-neutral-800">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-950 border border-neutral-800/80">
                <div>
                  <span className="text-[10px] text-neutral-400 block">직통 예약 전화번호</span>
                  <strong className="text-xs text-white font-mono">{kakaoNumber}</strong>
                </div>
                <button
                  onClick={handleCopyNumber}
                  className="px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-[11px] text-amber-300 font-semibold border border-neutral-700 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-neutral-400" />
                      <span>번호 복사</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={handleCopyTemplate}
                className="w-full py-2 px-3 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-[11px] font-semibold text-neutral-300 border border-neutral-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {templateCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">문의 양식 복사 완료!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-400" />
                    <span>카톡 문의 양식 복사</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Connect Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="py-2.5 px-3 rounded-xl bg-neutral-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-neutral-700 hover:border-amber-400 hover:text-amber-300 hover:bg-amber-500/15 hover:shadow-[0_0_15px_rgba(245,158,11,0.35)] transition-all duration-300 group"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300" />
                <span>전화 연결</span>
              </a>

              <a
                href={`sms:${STORE_INFO.phone}?body=${encodeURIComponent('[어따써 사천점] 꼼장어 예약/자리 문의드립니다.')}`}
                className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-md hover:from-amber-400 hover:to-orange-400 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-neutral-950" />
                <span>문자 문의</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
