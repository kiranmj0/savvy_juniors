import { Request, Response } from "express";

interface EnquiryData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function handleEnquiry(req: Request, res: Response) {
  try {
    const { name, email, phone, subject, message }: EnquiryData = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing required fields" 
      });
    }

    // Send WhatsApp notification
    await sendWhatsAppNotification({
      name,
      email,
      phone,
      subject,
      message
    });

    res.json({ 
      success: true, 
      message: "Enquiry submitted successfully" 
    });

  } catch (error) {
    console.error("Error processing enquiry:", error);
    res.status(500).json({ 
      success: false, 
      error: "Failed to process enquiry" 
    });
  }
}

async function sendWhatsAppNotification(data: EnquiryData) {
  const whatsappNumber = "9986426401";
  const message = formatWhatsAppMessage(data);
  
  // Using WhatsApp Business API or a service like Twilio
  // For now, we'll use a simple HTTP request to WhatsApp Web API
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
  
  // In production, you would use a proper WhatsApp Business API
  // For demonstration, we'll log the message and URL
  console.log("WhatsApp Notification:");
  console.log("Number:", whatsappNumber);
  console.log("Message:", message);
  console.log("URL:", whatsappUrl);
  
  // You can integrate with services like:
  // - Twilio WhatsApp API
  // - WhatsApp Business API
  // - Other WhatsApp gateway services
}

function formatWhatsAppMessage(data: EnquiryData): string {
  return `🔔 *New Enquiry - Savvy Juniors*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone || 'Not provided'}
📝 *Subject:* ${data.subject}

💬 *Message:*
${data.message}

⏰ *Time:* ${new Date().toLocaleString()}

---
Savvy Juniors Early Childhood Centre`;
}