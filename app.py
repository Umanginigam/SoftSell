from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"], supports_credentials=True)

# Load OpenAI API key securely
openai.api_key = os.getenv("OPENAI_API_KEY")  

# Keyword-based hardcoded responses
mock_responses = {
    # Selling License
    "how do i sell my license": "Go to your dashboard, click 'Sell License', and follow the steps.",
    "how to sell a license": "You can list your license for resale by visiting the 'Sell License' section in your account.",
    "i want to sell my license": "Sure! Head to your dashboard and click on 'Sell License'.",
    "can i sell my license": "Yes, simply visit your dashboard and use the 'Sell License' option.",
    "where to sell license": "Log in and go to 'Sell License' from your dashboard.",
    
    # What is SoftSell
    "what is softsell": "SoftSell is a platform where users can securely resell unused or extra software licenses.",
    "tell me about softsell": "SoftSell helps you resell or buy unused software licenses legally.",
    "softsell meaning": "It's a platform for safe and legal software license resale.",
    "what does softsell do": "We enable users to buy and sell extra software licenses.",

    # Payment
    "how do i get paid": "We process payments via bank transfer or PayPal within 3–5 business days.",
    "how do i receive my payment": "Payments are sent to your chosen method (PayPal or bank) within 3–5 business days.",
    "when will i get paid": "Expect to receive payments within 3 to 5 business days after a sale.",
    "payment process": "SoftSell pays via bank or PayPal within 3–5 working days.",
    "how do payments work": "Once your license is sold, the amount is sent via PayPal or bank transfer in 3–5 days.",
    "is payment secure": "Yes, all payments are handled securely via trusted payment gateways.",

    # Buyer Questions
    "how to buy a license": "You can search for software on our homepage and purchase directly from verified sellers.",
    "can i buy licenses": "Yes, you can purchase unused licenses from trusted sellers on our platform.",
    "is it safe to buy software here": "Absolutely! We verify all licenses before listing.",
    
    # General Help
    "how does this work": "Buyers can find discounted licenses and sellers can list extra ones. SoftSell manages the process.",
    "help me with my account": "For account-related queries, visit the Help Center or contact support.",
    "how to contact support": "You can reach support via the 'Contact Us' page or email us at support@softsell.com.",
    "i need help": "Sure! You can reach our support team or browse the Help Center for answers.",
}


@app.route('/')
def home():
    return "SoftSell AI Chat API is running."


@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '').strip().lower()

    if not user_message:
        return jsonify({"reply": "Please enter a message."}), 400

    # Check for hardcoded response first
    for question, response in mock_responses.items():
        keywords = question.split()
        if all(word in user_message for word in keywords):
            return jsonify({"reply": response})

    # No match? Use OpenAI API
    try:
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # or gpt-4 if available
            messages=[
                {"role": "system", "content": "You are SoftSell's AI assistant. Help users with license resale, payment, buying/selling licenses, and platform-related questions."},
                {"role": "user", "content": user_message}
            ]
        )
        ai_reply = completion.choices[0].message.content.strip()
        return jsonify({"reply": ai_reply})
    except Exception as e:
        print("OpenAI API error:", e)
        return jsonify({"reply": "Oops! Something went wrong with the AI. Please try again later."}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5001)
