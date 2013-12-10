package com.pmsystem.test;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.pmsystem.model.pj.Project;
import com.pmsystem.service.pj.ProjectManageService;
import com.sun.org.apache.bcel.internal.generic.NEW;

import junit.framework.TestCase;

public class ProjectServiceTest extends TestCase{
	public ApplicationContext context = new ClassPathXmlApplicationContext("classpath*:com/pmsystem/spring/configxml/applicationContext.xml");
	public ProjectManageService service = (ProjectManageService) context.getBean("projectManageService");
	
//	public void testinsert(){
//		Project project  = new Project();
//		project.setId("00000013");
//		project.setName("IT项目管理");
//		project.setStartDate("2013/11/21");
//		project.setFinishDate("2013/12/11");
//		project.setStatus("进行中");
//		project.setDesc("IT项目管理系统是一个基于云计算的管理平台");
//		service.addProject(project);
//	}
//	public void testUpdate(){
//		Project project = new Project();
//		project.setProjectID("00000013");
//		project.setProjectName("IT项目管理");
//		project.setProjectStartTime("2013/11/21");
//		project.setProjectFinishTime("2013/12/11");
//		project.setProjectState("未启动");
//		project.setProjectStatement("IT项目管理系统是一个基于云计算的管理平台");
//		service.updateProject(project);
//	}
//	public void testDelete(){
		
//		System.out.println(service.deleteProject("PC20131202213417", "testID"));
//	}
	public void testList(){
		List<Project> list = null;
		list = service.getAllProjects(10, 0, "testID");
		System.out.println(list.get(0).getName());
		System.out.println(list.get(1).getName());
		System.out.println(list.get(2).getId());
	}
}
