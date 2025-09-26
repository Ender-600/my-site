"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Video,
  Coffee,
  Code,
  Camera,
} from "lucide-react";

const consultationTypes = [
  {
    id: "tech-consultation",
    title: "技术咨询",
    description: "前端开发、技术选型、架构设计等专业咨询",
    duration: 60,
    price: "免费",
    icon: <Code className="h-6 w-6" />,
    color: "bg-blue-500",
  },
  {
    id: "project-discussion",
    title: "项目讨论",
    description: "项目需求分析、技术方案讨论、合作洽谈",
    duration: 90,
    price: "面议",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "bg-green-500",
  },
  {
    id: "creative-collaboration",
    title: "创意合作",
    description: "摄影、设计、音乐等创意项目合作讨论",
    duration: 60,
    price: "面议",
    icon: <Camera className="h-6 w-6" />,
    color: "bg-purple-500",
  },
  {
    id: "casual-chat",
    title: "轻松交流",
    description: "技术分享、行业交流、职业发展等话题",
    duration: 30,
    price: "免费",
    icon: <Coffee className="h-6 w-6" />,
    color: "bg-orange-500",
  },
];

const timeSlots = [
  { time: "09:00", available: true },
  { time: "10:00", available: true },
  { time: "11:00", available: false },
  { time: "14:00", available: true },
  { time: "15:00", available: true },
  { time: "16:00", available: false },
  { time: "17:00", available: true },
  { time: "19:00", available: true },
  { time: "20:00", available: true },
];

const availableDates = [
  { date: "2024-03-25", day: "周一", available: true },
  { date: "2024-03-26", day: "周二", available: true },
  { date: "2024-03-27", day: "周三", available: false },
  { date: "2024-03-28", day: "周四", available: true },
  { date: "2024-03-29", day: "周五", available: true },
  { date: "2024-03-30", day: "周六", available: true },
  { date: "2024-03-31", day: "周日", available: false },
];

export function BookingSystem() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    meetingType: "online",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以集成苹果日历 API 或其他预约系统
    console.log("预约信息:", {
      type: selectedType,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    });
    setStep(4);
  };

  const resetBooking = () => {
    setSelectedType(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setStep(1);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      meetingType: "online",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-4">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 4 && (
                <div
                  className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1: Select Consultation Type */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">选择咨询类型</CardTitle>
            <p className="text-center text-muted-foreground">
              请选择您希望进行的咨询类型
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {consultationTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedType === type.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-lg ${type.color} text-white`}
                      >
                        {type.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">
                          {type.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {type.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            {type.duration} 分钟
                          </Badge>
                          <span className="font-medium text-primary">
                            {type.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <Button onClick={() => setStep(2)} disabled={!selectedType}>
                下一步
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Select Date and Time */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">选择时间</CardTitle>
            <p className="text-center text-muted-foreground">
              请选择您方便的时间
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Date Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-4">选择日期</h3>
                <div className="grid grid-cols-2 gap-2">
                  {availableDates.map((date) => (
                    <Button
                      key={date.date}
                      variant={
                        selectedDate === date.date ? "default" : "outline"
                      }
                      disabled={!date.available}
                      onClick={() => setSelectedDate(date.date)}
                      className="h-auto p-4 flex flex-col"
                    >
                      <span className="font-medium">{date.day}</span>
                      <span className="text-sm text-muted-foreground">
                        {date.date.split("-").slice(1).join("/")}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-4">选择时间</h3>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot.time}
                      variant={
                        selectedTime === slot.time ? "default" : "outline"
                      }
                      disabled={!slot.available}
                      onClick={() => setSelectedTime(slot.time)}
                      className="h-12"
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={() => setStep(1)}>
                上一步
              </Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!selectedDate || !selectedTime}
              >
                下一步
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Contact Information */}
      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">联系信息</CardTitle>
            <p className="text-center text-muted-foreground">
              请填写您的联系信息
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">姓名 *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">邮箱 *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone">电话</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <Label>会议方式</Label>
                <div className="flex gap-4 mt-2">
                  <Button
                    type="button"
                    variant={
                      formData.meetingType === "online" ? "default" : "outline"
                    }
                    onClick={() =>
                      setFormData({ ...formData, meetingType: "online" })
                    }
                    className="flex items-center gap-2"
                  >
                    <Video className="h-4 w-4" />
                    在线会议
                  </Button>
                  <Button
                    type="button"
                    variant={
                      formData.meetingType === "offline" ? "default" : "outline"
                    }
                    onClick={() =>
                      setFormData({ ...formData, meetingType: "offline" })
                    }
                    className="flex items-center gap-2"
                  >
                    <Coffee className="h-4 w-4" />
                    线下见面
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="message">备注信息</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="请简要描述您希望讨论的内容..."
                  rows={4}
                />
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(2)}
                >
                  上一步
                </Button>
                <Button type="submit">确认预约</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <Card>
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">预约成功！</h2>
            <p className="text-muted-foreground mb-6">
              您的预约已提交成功，我会尽快与您联系确认具体安排。
            </p>
            <div className="bg-muted/50 rounded-lg p-4 mb-6 text-left max-w-md mx-auto">
              <h3 className="font-semibold mb-2">预约详情</h3>
              <p>
                <strong>咨询类型:</strong>{" "}
                {consultationTypes.find((t) => t.id === selectedType)?.title}
              </p>
              <p>
                <strong>日期:</strong> {selectedDate}
              </p>
              <p>
                <strong>时间:</strong> {selectedTime}
              </p>
              <p>
                <strong>会议方式:</strong>{" "}
                {formData.meetingType === "online" ? "在线会议" : "线下见面"}
              </p>
            </div>
            <Button onClick={resetBooking}>预约其他时间</Button>
          </CardContent>
        </Card>
      )}

      {/* Calendar Integration Info */}
      <Card className="mt-8">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <Calendar className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-2">日历同步</h3>
              <p className="text-muted-foreground text-sm">
                预约成功后，系统会自动将会议添加到您的苹果日历中，并发送邮件确认。
                您也可以手动将会议添加到其他日历应用中。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
