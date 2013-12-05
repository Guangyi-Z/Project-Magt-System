package com.pmsystem.dao.pj;

import java.util.List;
import java.util.Map;

import com.pmsystem.model.pj.Project;
import com.pmsystem.model.pj.ProjectOfGantt;
import com.pmsystem.model.pj.Task;

public interface ProjectManageDAO {
	public String addProject(Project project);
	
	public String deleteProject(String id);
	
	public void updateProject(Project project);
	
	public int getCount();
	
	public List<Project> getAllProjectCount(Map<String, Integer> map);
	
	public Project getProjectByID(String ID);
	
	// for Task Magt
	public String findTasksOfProject(String proId);

	public void insertTasksOfProject(Map<String, Object> paramMap);
	
	public void deleteTasksOfProject(String proId);
	
}
