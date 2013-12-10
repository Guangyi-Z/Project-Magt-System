package com.pmsystem.service.impl.pj;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.pmsystem.dao.pj.ProjectManageDAO;
import com.pmsystem.model.pj.Project;
import com.pmsystem.service.pj.ProjectManageService;

public class ProjectManageServiceImpl implements ProjectManageService {
	private ProjectManageDAO projectManageDAO;

	public String addProject(Project project,String MyID) {
		// TODO Auto-generated method stub

		SimpleDateFormat f = new SimpleDateFormat("yyyyMMddHHmmss");
		Date today = new Date();
		project.setId("PC" + f.format(today).toString());

		Date startDate = new Date(project.getStartDate().toString());
		if (startDate.after(today)) {
			project.setStatus("执行中");
		} else {
			project.setStatus("未启动");
		}
		try {
			projectManageDAO.addProject(project);
			projectManageDAO.addProjectWithStaff(project.getId(), MyID);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public String deleteProject(String id, String MyID) {
		try {
			projectManageDAO.deleteProject(id, MyID);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public String updateProject(Project project) {
		try {
			projectManageDAO.updateProject(project);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public List<Project> getAllProjects(int limit, int start, String MyID) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("limit", limit);
		map.put("start", start);
		map.put("MyID", MyID);
		List<Project> list = null;
		try {
			list = projectManageDAO.getAllProjectCount(map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	public int getCount() {
		int count = -1;
		try {
			count = projectManageDAO.getCount();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return count;
	}

	public Project getProjectByID(String id) {
		Project project = new Project();
		try {
			project = projectManageDAO.getProjectByID(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return project;
	}

	public ProjectManageDAO getProjectManageDAO() {
		return projectManageDAO;
	}

	public void setProjectManageDAO(ProjectManageDAO projectManageDAO) {
		this.projectManageDAO = projectManageDAO;
	}

	public List<Project> searchProject(String ProjectID) {
		return projectManageDAO.searchProject('%' + ProjectID + '%');
	}
	public String applyForProject(String MyID,String ProjectID){
		projectManageDAO.applyForProject(MyID, ProjectID);
		return null;
	}

}
