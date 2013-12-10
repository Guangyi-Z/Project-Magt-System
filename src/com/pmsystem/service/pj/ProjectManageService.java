package com.pmsystem.service.pj;

import java.util.List;

import com.pmsystem.model.pj.Project;

public interface ProjectManageService {
	public String addProject(Project project,String MyID);
	
	public String deleteProject(String id, String MyID);
	
	public String updateProject(Project project);
	
	public List<Project> getAllProjects(int limit, int start, String MyID);
	
	public Project getProjectByID(String id);
	
	public int getCount();
	
	public List<Project> searchProject(String ProjectID);
	
	public String applyForProject(String MyID,String ProjectID);
}
