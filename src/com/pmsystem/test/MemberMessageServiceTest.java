package com.pmsystem.test;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.pmsystem.model.pj.MemberMessage;
import com.pmsystem.service.pj.MemberMessageService;

public class MemberMessageServiceTest extends TestCase{
	public ApplicationContext context = new ClassPathXmlApplicationContext("classpath*:com/pmsystem/spring/configxml/applicationContext.xml");
	public MemberMessageService service = (MemberMessageService) context.getBean("memberMessageService");
	
	public MemberMessage message;
	public void testGetByID(){
		message = service.getMemberMsgByID("HR001");
		System.out.println(message.getMemberEmail());
		System.out.println(message.getMemberIntroduction());
		System.out.println(message.getMemberName());
		System.out.println(message.getMemberPhone());
		
	}
}
