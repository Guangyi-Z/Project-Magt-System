package com.pmsystem.service.impl.pj;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.pmsystem.dao.pj.ProjectMemberDAO;
import com.pmsystem.model.pj.ProjectMember;
import com.pmsystem.service.pj.ProjectMemberServiece;

public class ProjectMemberServieceImpl implements ProjectMemberServiece{
	private ProjectMemberDAO projectMemberDAO;
	
	public String addMember(ProjectMember member){
		try {
			projectMemberDAO.addMember(member);
			
		}catch(Exception e){
			e.printStackTrace();
		}
		return "ok";
	}
	
	public String updateMember(ProjectMember member){
		try{
			projectMemberDAO.updateMember(member);
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
	
	public String deleteMember(String proID, String memID){
		Map<String, String> map = new HashMap<String, String>();
		map.put("proID", proID);
		map.put("memID", memID);
		try{
			projectMemberDAO.deleteMember(map);
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
		
	}
	public List<ProjectMember> getAllMembers(int limit, int start, String projectID){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("limit", limit);
		map.put("start", start);
		map.put("projectID", projectID);
		List<ProjectMember> list = null;
		try{
			list = projectMemberDAO.getAllMembers(map);
		}catch(Exception e){
			e.printStackTrace();
		}
		return list;
	}
	
	public int getCount(){
		int count = -1;
		try{
			count = projectMemberDAO.getCount();
		}catch(Exception e){
			e.printStackTrace();
		}
		return count;
	}

	public ProjectMemberDAO getProjectMemberDAO() {
		return projectMemberDAO;
	}

	public void setProjectMemberDAO(ProjectMemberDAO projectMemberDAO) {
		this.projectMemberDAO = projectMemberDAO;
	}
	
	
}
