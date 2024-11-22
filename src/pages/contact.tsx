// pages/contact.tsx
import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">お問い合わせ</h1>
        <p className="mt-2">ご質問やお問い合わせがあれば、以下のフォームをご利用ください。</p>
      </header>

      {/* Contact Form */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <form
          action="#"
          method="POST"
          className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto"
        >
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="例: 山田太郎"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="例: yamada@example.com"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="ご自由にメッセージをご記入ください。"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              送信
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 Noborito English Club. All rights reserved.</p>
      </footer>
    </div>
  );
}
