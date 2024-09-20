'use client'
import React, {useState} from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Label } from '@/components/ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Paperclip, Mic, Map } from "lucide-react";




export default function Dashboard() {
  const [inputMessage, setInputMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputMessage.trim()) {
      alert('Please enter your prompt.');
      return;
    }

    // Simulate sending the message and appending it to the message log
    setMessages([...messages, inputMessage]);
    setInputMessage(''); // Clear the input after sending
  };


  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold">Dashboard</h1>

      <div className='pt-10'>
        {/* Message log (optional) */}
        <div className="w-full mb-4 p-4 rounded-lg h-64 overflow-y-auto ">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div key={index} className="mb-3">
                <p className="bg-gray-200 dark:bg-zinc-700 p-3 rounded-lg text-sm">{msg}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400"></p>
          )}
        </div>
      </div>

      <div className="my-5 flex flex-col items-center justify-center sm:flex-row sm:w-9/12 bottom-0 absolute">
        <form onSubmit={handleSubmit}
              className="mb-4 sm:mb-0 sm:mr-2.5 h-full w-full sm:w-9/12 px-5 focus:outline-0 dark:border-zinc-800 dark:placeholder:text-zinc-400 rounded-2xl outline"
            >
              <div className="flex items-center">
                <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Paperclip className="size-4" />
                      <span className="sr-only">Attach file</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Attach File</TooltipContent>
                </Tooltip>
                </TooltipProvider>
                <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                id="message"
                value={inputMessage}
                onChange={handleChange}
                placeholder="Type your message here..."
                className="min-h-12 resize-none border-0 p-6 shadow-none focus-visible:ring-0"
              />
                <Button type="submit" size="sm" className="ml-auto gap-1.5 text-black dark:text-white items-center justify-center rounded-2xl px-4 py-5" >
                  <Map className="size-4" />
                </Button>
              </div>
            </form>
      </div>
    </div>
  )
}
