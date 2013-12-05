package com.pmsystem.service.pj;

import com.pmsystem.model.pj.Project;
import com.pmsystem.model.pj.ProjectOfGantt;

public interface TaskManageService {
	public boolean updateTasksOfProject(String proId, String project);
	
	public String findTasksOfProject(String proId); 

}
