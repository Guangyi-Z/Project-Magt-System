package com.pmsystem.service.pj;

import java.util.List;

import com.pmsystem.model.pj.Project;

public interface ProjectManageService {
	public String addProject(Project project);
	
	public String deleteProject(String id);
	
	public String updateProject(Project project);
	
	public List<Project> getAllProjects(int limit, int start);
	
	public Project getProjectByID(String id);
	
	public int getCount();
	
	public List<Project> searchProject(String ProjectID);
	
	public String applyForProject(String MyID,String ProjectID);
}
