package com.pmsystem.service.impl.pj;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.pmsystem.dao.pj.ProjectManageDAO;
import com.pmsystem.model.pj.Project;
import com.pmsystem.service.pj.ProjectManageService;

public class ProjectManageServiceImpl implements ProjectManageService {
	private ProjectManageDAO projectManageDAO;

	public String addProject(Project project) {
		// TODO Auto-generated method stub

		SimpleDateFormat f = new SimpleDateFormat("yyyyMMddHHmmss");
		Date today = new Date();
		project.setId("PC" + f.format(today).toString());

		Date startDate = new Date(project.getStartDate().toString());
		if (startDate.after(today)) {
			project.setStatus("Î´Æô¶¯");
		} else {
			project.setStatus("Ö´ÐÐÖÐ");
		}
		try {
			projectManageDAO.addProject(project);
		} catch (Exception e) {
		}
		return null;
	}

	public ProjectManageDAO getProjectManageDAO() {
		return projectManageDAO;
	}

	public void setProjectManageDAO(ProjectManageDAO projectManageDAO) {
		this.projectManageDAO = projectManageDAO;
	}

}
