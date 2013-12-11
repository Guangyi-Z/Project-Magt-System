package com.pmsystem.action.pj;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import org.apache.struts2.components.Else;

import com.opensymphony.xwork2.ActionSupport;
import com.pmsystem.model.fr.Friend;
import com.pmsystem.model.pj.Project;
import com.pmsystem.service.pj.ProjectManageService;

public class ProjectManageAction extends ActionSupport {
	private Project project;
	private Map<String, Object> jsonMap;
	private ProjectManageService projectManageService;
	private boolean success;

	private String id;
	private String ProjectID;
	private String MyID;
	private List<Project> projects;
	private int totalCount;
	private int start;
	private int limit;

	// 下列变量用作项目任务管理
	String prj;
	String result;

	public ProjectManageAction() {
		jsonMap = new HashMap<String, Object>();
	}

	public String addProject() {
		projectManageService.addProject(project,MyID);
		jsonMap.put("success", true);
		return SUCCESS;
	}

	public String deleteProject() {
		jsonMap.clear();
		if (projectManageService.deleteProject(id, MyID) == null) {

		}
		jsonMap.put("success", true);
		return SUCCESS;
	}

	public String updateProject() {
		jsonMap.clear();
		if (projectManageService.updateProject(project) == null) {

		}

		jsonMap.put("success", true);
		return SUCCESS;
	}

	public String findAllProject() {
		jsonMap.clear();
		if (projectManageService.getAllProjects(limit, start,MyID) != null) {
			projects = projectManageService.getAllProjects(limit, start, MyID);
			totalCount = projectManageService.getCount();
//			System.out.println(projects.get(0).getName());
//			System.out.println(projects.get(1).getName());
//			System.out.println(projects.get(2).getId());
			jsonMap.put("projects", projects);
			jsonMap.put("totalCount", totalCount);
			jsonMap.put("success", true);
			
		} else
			jsonMap.put("success", false);
		return SUCCESS;
	}

	public String findProjectByID() {
		jsonMap.clear();
		String ID = project.getId();
		project = projectManageService.getProjectByID(ID);
		if (project != null) {
			jsonMap.put("success", true);
		} else
			jsonMap.put("success", false);
		return SUCCESS;
	}

	public String storeProjectId() {
		jsonMap.clear();
		System.out.println("id:" + id);
		TaskManageAction.setProId(id);
		// TaskManageAction.proId= Integer.parseInt(id); // set the project id
		// of Task Action
		jsonMap.put("success", true);
		return SUCCESS;
	}

	public String searchProject() {
		jsonMap.clear();
		List<Project> projects = projectManageService.searchProject(ProjectID);
		jsonMap.put("projects", projects);
		jsonMap.put("totalCount", projects.size());
		return SUCCESS;
	}

	public String applyForProject() {
		jsonMap.clear();
		System.out.println("::::::::::::"+MyID+ProjectID);
		try{
		projectManageService.applyForProject(MyID, ProjectID);
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return SUCCESS;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public Map<String, Object> getJsonMap() {
		return jsonMap;
	}

	public void setJsonMap(Map<String, Object> jsonMap) {
		this.jsonMap = jsonMap;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public ProjectManageService getProjectManageService() {
		return projectManageService;
	}

	public void setProjectManageService(
			ProjectManageService projectManageService) {
		this.projectManageService = projectManageService;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	public String getPrj() {
		return prj;
	}

	public void setPrj(String prj) {
		this.prj = prj;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getProjectID() {
		return ProjectID;
	}

	public void setProjectID(String projectID) {
		ProjectID = projectID;
	}

	public String getMyID() {
		return MyID;
	}

	public void setMyID(String myID) {
		MyID = myID;
	}

}
