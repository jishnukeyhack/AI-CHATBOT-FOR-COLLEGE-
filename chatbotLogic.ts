import { ChatbotResponse } from '../types';

const collegeData = {
  admission: {
    process: "The admission process at ADGIPS involves:\n1. Online application\n2. Merit-based selection\n3. Document verification\n4. Fee payment",
    courses: "We offer:\n- B.Tech (CSE, IT, ECE)\n- BBA\n- MBA",
    fees: "Fee structure varies by course. Please visit our website for detailed information.",
  },
  academics: {
    departments: ["Computer Science", "Information Technology", "Electronics", "Management"],
    faculty: "We have highly qualified faculty members with extensive industry and academic experience.",
    facilities: "Modern labs, Digital library, Wi-Fi campus, Sports facilities",
  },
  contact: {
    address: "FC-26, Shastri Park, Delhi-110053",
    phone: "+91-11-22484566",
    email: "info@adgips.ac.in",
  },
};

export function generateResponse(input: string): ChatbotResponse {
  const lowercaseInput = input.toLowerCase();
  
  // Admission related queries
  if (lowercaseInput.includes('admission') || lowercaseInput.includes('apply')) {
    return {
      content: collegeData.admission.process,
      links: ['https://adgips.ac.in/admissions']
    };
  }

  // Course related queries
  if (lowercaseInput.includes('course') || lowercaseInput.includes('program')) {
    return {
      content: collegeData.admission.courses,
      links: ['https://adgips.ac.in/courses']
    };
  }

  // Fee related queries
  if (lowercaseInput.includes('fee') || lowercaseInput.includes('payment')) {
    return {
      content: collegeData.admission.fees,
      links: ['https://adgips.ac.in/fees']
    };
  }

  // Contact related queries
  if (lowercaseInput.includes('contact') || lowercaseInput.includes('location')) {
    return {
      content: `You can reach us at:\n${collegeData.contact.address}\nPhone: ${collegeData.contact.phone}\nEmail: ${collegeData.contact.email}`,
      links: ['https://adgips.ac.in/contact']
    };
  }

  // Faculty or department related queries
  if (lowercaseInput.includes('faculty') || lowercaseInput.includes('department')) {
    return {
      content: collegeData.academics.faculty + "\n\nOur departments: " + collegeData.academics.departments.join(", "),
      links: ['https://adgips.ac.in/faculty']
    };
  }

  // Default response
  return {
    content: "I'm here to help you with information about ADGIPS. You can ask me about admissions, courses, fees, faculty, or contact information. How may I assist you?",
  };
}