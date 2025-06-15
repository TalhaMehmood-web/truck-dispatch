import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/constants/app";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    link: `mailto:${contactInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.conatctNumber,
    link: `tel:${contactInfo.conatctNumber}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: contactInfo.location,
  },
];

const BookmeDialog = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Let's Connect!
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.link || "#"}
                target={item.link ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-4 rounded-xl p-4 bg-muted hover:bg-accent transition-all duration-300",
                  !item.link && "cursor-default"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>
                  <p className=" text-xs sm:text-base font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookmeDialog;
