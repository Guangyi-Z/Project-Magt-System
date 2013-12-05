package com.pmsystem.service.impl.pj;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.pmsystem.dao.pj.ProjectManageDAO;
import com.pmsystem.model.pj.ProjectOfGantt;
import com.pmsystem.model.pj.Task;
import com.pmsystem.model.pj.TaskOfGannt;
import com.pmsystem.service.pj.TaskManageService;

public class TaskManageServiceImpl implements TaskManageService {

	private ProjectManageDAO projectManageDAO;
	
	public String findTasksOfProject(String proId) {
		// TODO Auto-generated method stub
		return projectManageDAO.findTasksOfProject(proId);
	}

	public boolean updateTasksOfProject(String proId, String project) {
		// TODO Auto-generated method stub
		/*List <Task> lTask= new ArrayList <Task>();
		for (TaskOfGannt t : project.getTasks()){
			Task tt= new Task();
			tt.setId(t.getId());
			tt.setName(t.getName());
			if(t.getStatus().equals("STATUS_ACTIVE"))
				tt.setStatus("执行中");
			else if (t.getStatus().equals("STATUS_DONE"))
				tt.setStatus("已结束");
			else tt.setStatus("未启动");
			tt.setDiscreption(t.getDescription());
			if(t.getEndIsMilestone().equals("true"))
				tt.setMilestone(1);
			else tt.setMilestone(0);
			tt.setIdOfAncestor();
			tt.setStartDate( new Date(Long.parseLong(t.getStart())) );
			tt.setEndDate( new Date(Long.parseLong(t.getEnd())) );
			lTask.add(tt);	// add to list
		}*/
		Map<String,Object> paramMap= new HashMap<String,Object>();
		paramMap.put("projectId", proId);
		paramMap.put("taskId", "-1");
		paramMap.put("json", project);
		projectManageDAO.deleteTasksOfProject(proId);
		projectManageDAO.insertTasksOfProject(paramMap);
		return true;
	}

	public ProjectManageDAO getProjectManageDAO() {
		return projectManageDAO;
	}

	public void setProjectManageDAO(ProjectManageDAO projectManageDAO) {
		this.projectManageDAO = projectManageDAO;
	}

}
