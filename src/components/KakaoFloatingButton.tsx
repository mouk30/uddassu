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
              viewBox="0 0 48 48"
              className="w-full h-full drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 6C13.507 6 5 12.984 5 21.6c0 5.485 3.42 10.307 8.683 13.064l-2.203 8.167c-.22.812.71 1.488 1.411 1.025l9.64-6.386C23.018 37.42 23.505 37.45 24 37.45c10.493 0 19-6.984 19-15.85C43 12.984 34.493 6 24 6Z"
                fill="#371D1E"
              />
              <path
                d="M17.5 17.5h-5v2.2h1.3v7.3h2.4v-7.3h1.3v-2.2Zm4.2 0h-2.2v9.5h2.2v-9.5Zm6.4 7.3h-2.5v-7.3h-2.2v9.5h4.7v-2.2Zm3.4-7.3h-2.3v9.5h2.3v-3.7l2.1 3.7h2.6l-2.6-4.5 2.5-5h-2.5l-2.1 4.2v-4.2Z"
                fill="#FEE500"
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
              <div className="w-10 h-10 rounded-2xl bg-[#FEE500] flex items-center justify-center shrink-0 shadow-md">
                <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
                  <path
                    d="M24 6C13.507 6 5 12.984 5 21.6c0 5.485 3.42 10.307 8.683 13.064l-2.203 8.167c-.22.812.71 1.488 1.411 1.025l9.64-6.386C23.018 37.42 23.505 37.45 24 37.45c10.493 0 19-6.984 19-15.85C43 12.984 34.493 6 24 6Z"
                    fill="#371D1E"
                  />
                  <path
                    d="M17.5 17.5h-5v2.2h1.3v7.3h2.4v-7.3h1.3v-2.2Zm4.2 0h-2.2v9.5h2.2v-9.5Zm6.4 7.3h-2.5v-7.3h-2.2v9.5h4.7v-2.2Zm3.4-7.3h-2.3v9.5h2.3v-3.7l2.1 3.7h2.6l-2.6-4.5 2.5-5h-2.5l-2.1 4.2v-4.2Z"
                    fill="#FEE500"
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
                <MessageCircle className="w-5 h-5 fill-[#371D1E]" />
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
