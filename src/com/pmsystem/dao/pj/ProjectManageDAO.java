package com.pmsystem.dao.pj;

import java.util.List;
import java.util.Map;

import com.pmsystem.model.pj.Project;

public interface ProjectManageDAO {
	public String addProject(Project project);
	
	public String deleteProject(String id);
	
	public void updateProject(Project project);
	
	public int getCount();
	
	public List<Project> getAllProjectCount(Map<String, Integer> map);
	
	public Project getProjectByID(String ID);
}
