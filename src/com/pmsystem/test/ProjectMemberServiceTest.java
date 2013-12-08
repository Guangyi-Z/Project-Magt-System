package com.pmsystem.test;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.pmsystem.model.pj.ProjectMember;
import com.pmsystem.service.pj.ProjectManageService;
import com.pmsystem.service.pj.ProjectMemberServiece;
import junit.framework.TestCase;

public class ProjectMemberServiceTest extends TestCase{
	public ApplicationContext context = new ClassPathXmlApplicationContext("classpath*:com/pmsystem/spring/configxml/applicationContext.xml");
	public ProjectMemberServiece service = (ProjectMemberServiece) context.getBean("projectMemberServiece");
	public void testinsert(){
		ProjectMember member = new ProjectMember();
		member.setMemberID("HR002");
		member.setProjectID("PC20131129184856");
		member.setMemberLimit("更新文档");
		member.setMemberRole("文档管理员");
		service.addMember(member);
	}
//		member.setMemberID("HR003");
//		member.setProjectID("PC20131129184858");
//		member.setMemberLimit("更新文档");
//		member.setMemberRole("文档管理员");
//		service.addMember(member);
//		member.setMemberID("HR003");
//		member.setProjectID("PC20131129184859");
//		member.setMemberLimit("更新文档");
//		member.setMemberRole("文档管理员");
//		service.addMember(member);
//	}
//	public void testUpdate(){
//		ProjectMember member = new ProjectMember();
//		member.setMemberID("HR003");
//		member.setProjectID("PC20131129184855");
//		member.setMemberLimit("更新文档");
//		member.setMemberRole("项目经理");
//		service.updateMember(member);
//	}
//	public void testGetALL() {
//		List<ProjectMember> list = null;
//		list = service.getAllMembers(10,0,"PC20131129184856");
//		if (list != null) {
//			System.out.println(list.get(1).getMemberName());
//		}
//		
//	}
//public void testDelete(){
//		
//		System.out.println(service.deleteMember("PC20131129184856", "HR002"));
//	}
}
