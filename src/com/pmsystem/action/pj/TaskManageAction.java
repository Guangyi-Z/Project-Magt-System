package com.pmsystem.action.pj;

import net.sf.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;
import com.pmsystem.model.pj.ProjectOfGantt;
import com.pmsystem.service.pj.TaskManageService;

public class TaskManageAction extends ActionSupport{
	
	TaskManageService taskManageService;
	
	public static String proId;
	String prj;
	String result;
	boolean ok;
	ProjectOfGantt project;

	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	
	public String getPrj() {
		return prj;
	}
	public void setPrj(String prj) {
		this.prj = prj;
	}
	public boolean isOk() {
		return ok;
	}
	public void setOk(boolean ok) {
		this.ok = ok;
	}
	
	public ProjectOfGantt getProject() {
		return project;
	}
	public void setProject(ProjectOfGantt project) {
		this.project = project;
	}
	public TaskManageService getTaskManageService() {
		return taskManageService;
	}
	public void setTaskManageService(TaskManageService taskManageService) {
		this.taskManageService = taskManageService;
	}
	
	
	public static String getProId() {
		return proId;
	}
	public static void setProId(String proId) {
		TaskManageAction.proId = proId;
	}
	/*
	 * Methods
	 */
	public String findTasksByProjectID(){
		prj= taskManageService.findTasksOfProject(proId);
		
		System.out.println("data from db: " + prj );
		// 
		JSONObject jsonObject = JSONObject.fromObject(prj); 
		project = (ProjectOfGantt)JSONObject.toBean(jsonObject, ProjectOfGantt.class); 
		
		return "load";
	}
	
	public String saveTasks(){
		System.out.println("project id:" + proId);
		System.out.println("project json" + prj);
		try {
			JSONObject jsonObject = JSONObject.fromObject(prj); 
			project = (ProjectOfGantt)JSONObject.toBean(jsonObject, ProjectOfGantt.class); 
			ok= taskManageService.updateTasksOfProject(proId, prj);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return "save";
	}

}

