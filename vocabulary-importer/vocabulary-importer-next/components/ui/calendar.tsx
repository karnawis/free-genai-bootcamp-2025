"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface CalendarProps {
  className?: string
  selectedDate?: Date
  onDateSelect?: (date: Date) => void
}

function Calendar({ 
  className, 
  selectedDate = new Date(), 
  onDateSelect 
}: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(selectedDate)
  
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()
  
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const NavigationButton = ({ 
    direction, 
    onClick 
  }: { 
    direction: "left" | "right"
    onClick: () => void 
  }) => (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        direction === "left" ? "absolute left-1" : "absolute right-1"
      )}
    >
      {direction === "left" ? "←" : "→"}
    </button>
  )

  return (
    <div className={cn("p-3", className)}>
      <div className="flex justify-center pt-1 relative items-center">
        <NavigationButton 
          direction="left" 
          onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} 
        />
        <span className="text-sm font-medium">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </span>
        <NavigationButton 
          direction="right" 
          onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} 
        />
      </div>

      <div className="mt-4">
        <div className="flex w-full">
          {days.map((day) => (
            <div
              key={day}
              className="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] text-center"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 mt-2">
          {Array.from({ length: firstDayOfMonth }).map((_, index) => (
            <div key={`empty-${index}`} className="h-9 w-9" />
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => {
            const date = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              index + 1
            )
            const isSelected = selectedDate.toDateString() === date.toDateString()
            const isToday = new Date().toDateString() === date.toDateString()

            return (
              <button
                key={index}
                onClick={() => onDateSelect?.(date)}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "h-9 w-9 p-0 font-normal",
                  isSelected && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                  isToday && "bg-accent text-accent-foreground"
                )}
              >
                {index + 1}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Calendar.displayName = "Calendar"

export { Calendar }