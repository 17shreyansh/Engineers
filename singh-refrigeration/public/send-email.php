<?php
require __DIR__ . '/../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $name = htmlspecialchars($data['name'] ?? '');
    $company = htmlspecialchars($data['company'] ?? '');
    $email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($data['phone'] ?? '');
    $subject = htmlspecialchars($data['subject'] ?? '');
    $message = htmlspecialchars($data['message'] ?? '');
    
    if (empty($name) || empty($email) || empty($phone) || empty($subject) || empty($message)) {
        echo json_encode(['success' => false, 'message' => 'All required fields must be filled']);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email address']);
        exit;
    }
    
    $mail = new PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host = 'mall.singhrefrigerationeng.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'noreply@singhrefrigerationeng.com';
        $mail->Password = 'Affobe@1234'; // Replace with your email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        
        $mail->setFrom('noreply@singhrefrigerationeng.com', 'Singh Refrigeration');
        $mail->addAddress('info.singhreagra@gmail.com');
        $mail->addReplyTo($email, $name);
        
        $mail->Subject = 'Contact Form: ' . $subject;
        $mail->Body = "New Contact Form Submission\n\n" .
                      "Name: $name\n" .
                      "Company: $company\n" .
                      "Email: $email\n" .
                      "Phone: $phone\n" .
                      "Subject: $subject\n\n" .
                      "Message:\n$message";
        
        $mail->send();
        echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'message' => 'Failed to send: ' . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
