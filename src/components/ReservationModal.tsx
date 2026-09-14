import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, User, MessageSquare, CheckCircle, Send } from 'lucide-react';
import { STORE_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:30');
  const [people, setPeople] = useState('4');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getSmsLink = () => {
    const message = encodeURIComponent(
      `[어따써 사천점 예약/자리 문의]\n성함: ${name || '고객님'}\n연락처: ${phone || '미입력'}\n일시: ${date || '오늘'} ${time}\n인원: ${people}명\n요청사항: ${notes || '없음'}`
    );
    return `sms:${STORE_INFO.phone}?body=${message}`;
  };

  const handleCopySlip = () => {
    const text = `[어따써 사천점 예약/자리 문의]\n성함: ${name}\n연락처: ${phone}\n일시: ${date} ${time}\n인원: ${people}명\n요청사항: ${notes || '없음'}`;
    navigator.clipboard.writeText(text);
    alert('예약 문의 내용이 복사되었습니다. 문자나 전화로 전달해주세요!');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full rounded-3xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 shadow-2xl my-8 text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">테이블 예약 & 자리 문의</h3>
                <p className="text-xs text-neutral-400">
                  사천점 직통 <strong className="text-amber-400">010-7795-0918</strong>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    예약자명
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm focus:outline-none focus:border-amber-500 text-white placeholder:text-neutral-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    연락처
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-1234-5678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm focus:outline-none focus:border-amber-500 text-white placeholder:text-neutral-600"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    방문 희망일
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm focus:outline-none focus:border-amber-500 text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    방문 희망 시간
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm focus:outline-none focus:border-amber-500 text-white"
                  >
                    <option value="11:30">점심 11:30 (점심특선)</option>
                    <option value="12:00">점심 12:00 (점심특선)</option>
                    <option value="13:00">점심 13:00 (점심특선)</option>
                    <option value="17:00">저녁 17:00</option>
                    <option value="18:00">저녁 18:00</option>
                    <option value="18:30">저녁 18:30 (인기 피크)</option>
                    <option value="19:00">저녁 19:00 (인기 피크)</option>
                    <option value="19:30">저녁 19:30</option>
                    <option value="20:00">저녁 20:00</option>
                    <option value="21:00">야식 21:00</option>
                    <option value="22:00">야식 22:00</option>
                  </select>
                </div>
              </div>

              {/* People Count */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  예약 인원
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['2', '3~4', '5~8', '9인 이상 단체'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPeople(p)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        people === p
                          ? 'bg-amber-500 text-neutral-950 border-amber-400'
                          : 'bg-neutral-950 text-neutral-400 border-neutral-800 hover:bg-neutral-850'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                  메뉴 사전 요청 또는 문의사항 (선택)
                </label>
                <textarea
                  rows={2}
                  placeholder="예: 사장님세트 1개 미리 세팅 부탁드립니다, 창가자리 선호"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs focus:outline-none focus:border-amber-500 text-white placeholder:text-neutral-600 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 text-neutral-950 font-bold text-sm shadow-xl hover:from-amber-400 hover:to-orange-500 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-neutral-950" />
                  <span>예약 정보 접수하기</span>
                </button>

                <div className="flex gap-2">
                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="flex-1 py-2.5 rounded-xl bg-neutral-800 text-neutral-200 text-xs font-bold flex items-center justify-center gap-1.5 border border-neutral-700 hover:border-amber-400 hover:text-amber-300 hover:bg-amber-500/15 hover:shadow-[0_0_16px_rgba(245,158,11,0.35)] transition-all duration-300 group"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300" />
                    <span>전화로 즉시 확정 (010-7795-0918)</span>
                  </a>

                  <a
                    href={getSmsLink()}
                    className="flex-1 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-bold flex items-center justify-center gap-1.5 border border-neutral-700 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
                    문자로 바로 전송
                  </a>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-white">
              예약 문의 정보가 생성되었습니다!
            </h3>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left text-xs space-y-1.5 text-neutral-300">
              <div><strong className="text-amber-400">예약자:</strong> {name} ({phone})</div>
              <div><strong className="text-amber-400">일시:</strong> {date || '오늘'} {time}</div>
              <div><strong className="text-amber-400">인원:</strong> {people}명</div>
              {notes && <div><strong className="text-amber-400">요청사항:</strong> {notes}</div>}
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              매장 상황(피크타임 여부 등)에 따라 실시간 확인 후 매장에서 최종 확정 연락을 드립니다. 빠른 확정을 원하시면 사장님 번호로 바로 전화 또는 문자를 보내주세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <a
                href={getSmsLink()}
                className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                문자로 바로 전송
              </a>
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="flex-1 py-3 rounded-xl bg-neutral-800 text-white text-xs font-bold flex items-center justify-center gap-2 border border-neutral-700 hover:border-amber-400 hover:text-amber-300 hover:bg-amber-500/15 hover:shadow-[0_0_18px_rgba(245,158,11,0.35)] transition-all duration-300 group"
              >
                <Phone className="w-4 h-4 text-amber-400 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300" />
                <span>전화 바로 걸기 ({STORE_INFO.phone})</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="text-xs text-neutral-500 hover:text-neutral-300 pt-2 block mx-auto underline cursor-pointer"
            >
              창 닫기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
