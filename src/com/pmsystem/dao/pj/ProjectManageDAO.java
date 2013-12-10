package com.pmsystem.dao.pj;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.pmsystem.model.pj.Project;
import com.pmsystem.model.pj.ProjectOfGantt;
import com.pmsystem.model.pj.Task;

public interface ProjectManageDAO {
	public int addProject(Project project);

	public int addProjectWithStaff(
			@Param(value = "ProjectID") String ProjectID,
			@Param(value = "MyID") String MyID);

	public String deleteProject(
			@Param(value = "ProjectID") String ProjectID,
			@Param(value = "MyID") String MyID);

	public void updateProject(Project project);

	public int getCount();

	public List<Project> getAllProjectCount(Map<String, Object> map);

	public Project getProjectByID(String ID);

	public List<Project> searchProject(String ProjectID);

	public void applyForProject(@Param(value = "MyID") String MyID,
			@Param(value = "ProjectID") String ProjectID);

	// for Task Magt
	public String findTasksOfProject(String proId);

	public void insertTasksOfProject(Map<String, Object> paramMap);

	public void deleteTasksOfProject(String proId);

}
