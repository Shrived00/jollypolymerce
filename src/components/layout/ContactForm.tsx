"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus(
          "Message sent succesfully, our team will reach you as soos as possible, thank you."
        );

        setFormData({
          first_name: "",
          last_name: "",
          phoneNumber: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending email");
    } finally {
      setIsLoading(false);
    }
  };

  const [text, setText] = useState("");
  const maxLength = 1000;

  const handleTextAreaChange = (e: any) => {
    const input = e.target.value.slice(0, maxLength);
    setText(input);
    setFormData({ ...formData, message: e.target.value });
  };

  return (
    <div className="bg-white h-full  col-span-5 md:col-span-3 p-10 flex flex-col gap-11 text-[#011C2A] md:rounded-ss-xl">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 md:col-span-1 flex flex-col">
          <h1 className="font-medium">First Name</h1>
          <Input
            type="text"
            name="first_name"
            required
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col">
          <h1 className="font-medium">Last Name</h1>
          <Input
            type="text"
            name="last_name"
            required
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 md:col-span-1 flex flex-col">
          <h1 className="font-medium">Email</h1>
          <Input
            type="text"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col">
          <h1 className="font-medium">Phone Number</h1>
          <Input
            type="text"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="col-span-2 flex  flex-col gap-5">
        <h1 className="font-semibold text-[#011C2A]">Select Subject?</h1>
        <RadioGroup
          defaultValue="General-Inquiry"
          name="subject"
          className="flex flex-col md:flex-row gap-10"
          onValueChange={(event: any) => {
            setFormData({ ...formData, subject: event });
          }}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="General Inquiry" id="General-Inquiry" />
            <Label htmlFor="option-one">General Inquiry</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Product Inquiry" id="Product-Inquiry" />
            <Label htmlFor="option-two">Product Inquiry</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="Bulk Order Requests"
              id="Bulk-Order-Requests"
            />
            <Label htmlFor="option-two">Bulk Order Requests</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Pricing & Quotes" id="Pricing-Quotes" />
            <Label htmlFor="option-two">Pricing & Quotes</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="col-span-2 flex-col gap-5">
        <h1 className="font-medium">Message</h1>
        <Input
          type="text"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div className="col-span-2 flex-col gap-5 flex justify-start items-end">
        <Button
          variant={"default"}
          onClick={handleSubmit}
          className="border-[2px]  bg-b text-white transition-all duration-500 py-3  md:py-5     px-5 md:px-10 font-medium rounded-full justify-center items-center text-[14px] md:text-[16px]"
        >
          <span className="flex items-center gap-2">
            {" "}
            {isLoading ? (
              <Loader2 className="animate-spin   duration-1000" />
            ) : undefined}
            Send Message
          </span>
        </Button>
      </div>
    </div>
  );
}
