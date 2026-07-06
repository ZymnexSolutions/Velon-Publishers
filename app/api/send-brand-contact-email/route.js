import nodemailer from "nodemailer";

function escapeHtml(input) {
  return String(input ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function required(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phoneNumber,
      message,
      service,
      coupon,
      source = "Website Form",
      referringPage,
      currentPage,
      userIP,
      userCity,
      userRegion,
      userCountry,
    } = body || {};

    if (!required(fullName) || !required(email) || !required(phoneNumber)) {
      return Response.json(
        { success: false, message: "Name, email and phone are required." },
        { status: 400 }
      );
    }

    const smtpUser = "velontechnologiesinc@gmail.com";
    const smtpPass = "ljip yayg iajf eejn";
    const adminRecipient = "velontechnologiesinc@gmail.com";

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phoneNumber);
    const safeMessage = escapeHtml(message || "N/A");
    const safeService = escapeHtml(service || "N/A");
    const safeCoupon = escapeHtml(coupon || "N/A");
    const safeSource = escapeHtml(source);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const adminHtmlContent = `
      <div style="font-family: Arial, sans-serif; background-color:#f8f9fa; padding: 20px;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <div style="background:#0d0f38; color:#ffffff; padding:16px 24px; border-radius:8px 8px 0 0;">
            <h2 style="margin:0;">New Lead - ${safeFullName}</h2>
            <p style="margin:8px 0 0 0; font-size:14px; opacity:0.9;">${safeSource}</p>
          </div>
          <div style="padding:24px; color:#333333;">
            <table style="width:100%; border-collapse:collapse;">
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Name:</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${safeFullName}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Email:</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${safeEmail}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Phone:</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${safePhone}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Service:</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${safeService}</td>
              </tr>
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Coupon:</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${safeCoupon}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef; vertical-align:top;">Message:</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${safeMessage}</td>
              </tr>
              ${
                userIP
                  ? `<tr style="background:#f8f9fa;"><td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">IP Address:</td><td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(userIP)}</td></tr>`
                  : ""
              }
              ${
                userCity
                  ? `<tr><td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Location:</td><td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(
                      `${userCity}, ${userRegion || ""}, ${userCountry || ""}`
                    )}</td></tr>`
                  : ""
              }
              ${
                referringPage
                  ? `<tr style="background:#f8f9fa;"><td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Referrer:</td><td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(
                      referringPage
                    )}</td></tr>`
                  : ""
              }
              ${
                currentPage
                  ? `<tr><td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Current Page:</td><td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${escapeHtml(
                      currentPage
                    )}</td></tr>`
                  : ""
              }
            </table>
          </div>
        </div>
      </div>
    `;

    const userHtmlContent = `
      <div style="font-family: Arial, sans-serif; background-color:#f8f9fa; padding: 20px;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <div style="background:linear-gradient(135deg, #0d0f38 0%, #1a1d5e 100%); color:#ffffff; padding:32px 24px; border-radius:8px 8px 0 0; text-align:center;">
            <h1 style="margin:0 0 8px 0; font-size:30px;">Thank You, ${safeFullName}!</h1>
            <p style="margin:0; font-size:16px; opacity:0.9;">We received your request.</p>
          </div>
          <div style="padding:32px 24px; color:#333333;">
            <p style="font-size:16px; line-height:1.6; margin-bottom:16px;">Our team will contact you shortly to discuss your project.</p>
            <div style="background:#f8f9fa; padding:24px; border-radius:8px; border-left:4px solid #0d0f38; margin:24px 0;">
              <p style="margin:0 0 16px 0; font-weight:600; color:#0d0f38; font-size:16px;">Your Submitted Details:</p>
              <table style="width:100%; font-size:14px; line-height:1.6;">
                <tr><td style="padding:8px 0; color:#666; width:120px;">Name:</td><td style="padding:8px 0; font-weight:600;">${safeFullName}</td></tr>
                <tr><td style="padding:8px 0; color:#666;">Email:</td><td style="padding:8px 0;">${safeEmail}</td></tr>
                <tr><td style="padding:8px 0; color:#666;">Phone:</td><td style="padding:8px 0;">${safePhone}</td></tr>
                <tr><td style="padding:8px 0; color:#666;">Service:</td><td style="padding:8px 0;">${safeService}</td></tr>
              </table>
            </div>
            <p style="font-size:16px; line-height:1.6; margin-bottom:8px;"><strong>Velon Book Publishing Team</strong></p>
            <p style="font-size:16px; line-height:1.6; margin:0;">Email: support@pinebookpublishing.com</p>
          </div>
        </div>
      </div>
    `;

    const adminInfo = await transporter.sendMail({
      from: `"Velon Book Publishing" <${smtpUser}>`,
      to: adminRecipient,
      subject: `Brand Contact - ${fullName}`,
      html: adminHtmlContent,
    });

    const userInfo = await transporter.sendMail({
      from: `"Velon Book Publishing" <${smtpUser}>`,
      to: email,
      subject: "Thank You for Contacting Velon Book Publishing!",
      html: userHtmlContent,
    });

    return Response.json({
      success: true,
      message: "Contact emails sent successfully",
      adminMessageId: adminInfo.messageId,
      userMessageId: userInfo.messageId,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Failed to send email",
        error: error?.message || "Unexpected error",
      },
      { status: 500 }
    );
  }
}
