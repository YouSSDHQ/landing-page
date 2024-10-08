import axios from '@/lib/axios';
import { AxiosError } from 'axios';
import { Notify } from 'notiflix';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
}

const JoinWaitlistModal: React.FC<WaitlistModalProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState({ phoneNumber: '' });
  const [isLoading, setIsLoading] = useState(false);

  const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone number
    const isValidPhoneNumber = phoneRegex.test(formData.phoneNumber);
    if (!isValidPhoneNumber) return Notify.failure('Please enter a valid phone number');

    setIsLoading(true);

    try {
      const response = await axios.post('/waitlist', formData);

      if (response.status !== 200) {
        if (response.status === 400) {
          return Notify.failure(
            (response.data as { message: string }).message ||
              'Unable to add you to the waitlist at this time. Please try again later.'
          );
        }
        throw new Error('Unexpected error occurred');
      }

      onClose();
      Notify.success('Thank you for joining our waitlist!');
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      Notify.failure(
        ((error as AxiosError).response?.data as { message: string })
          ?.message ||
          'Unable to add you to the waitlist at this time. Please try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 border-gray-800 text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-white">Join Our Waitlist</DialogTitle>
          <DialogDescription>
            Be the first to find out when we launch.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <Input
            id="text"
            placeholder="Your phone number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            className="bg-gray-800 w-full"
          />
        </div>
        <DialogFooter>
          <Button
            className="bg-green-400 text-black hover:bg-green-500"
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Please wait</span>
              </>
            ) : (
              'Join'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JoinWaitlistModal;
