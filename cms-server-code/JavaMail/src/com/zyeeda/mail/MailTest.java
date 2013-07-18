package com.zyeeda.mail;

import java.io.UnsupportedEncodingException;
import java.util.Properties;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class MailTest {
	public static void main(String[] args) {
		Properties prop = new Properties();
		prop.setProperty("mail.smtp.auth", "true"); // 要使用用户名，密码进行认证登录，如果是直接给smtp服务器发就不用这个了
		prop.setProperty("mail.transport.protocol", "smtp");
		//props.setProperty("mail.transport.protocol", "openssl");
		//props.setProperty("mail.store.protocol", "openssl");

		
		Session session = Session.getDefaultInstance(prop);
		//session.setDebug(true);
		MimeMessage mes = new MimeMessage(session);
		
		try {
			mes.setSubject("Hi---Lei");
			mes.setText("test email。");
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//set sender address
		Address address = null;
		Address toAddress = null;
		try {
			address = new InternetAddress("sz_cms@sina.com","磊子");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			mes.setFrom(address);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		try {
			toAddress = new InternetAddress("728064001@qq.com");
			
		} catch (AddressException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			mes.addRecipient(Message.RecipientType.TO, toAddress);
			Transport tsp = session.getTransport("smtp");
			tsp.connect("smtp.sina.com", "sz_cms", "zyeeda");
			tsp.sendMessage(mes,mes.getAllRecipients());
			System.out.println("ok");
			tsp.close();
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
