package com.pmsystem.model.pj;

import java.util.List;

public class ProjectOfGantt {
	List <TaskOfGannt> tasks;
	int selectedRow;
	List <String> deletedTaskIds;
	boolean canWrite,
			canWriteOnParent;
	
	public List<TaskOfGannt> getTasks() {
		return tasks;
	}
	public void setTasks(List<TaskOfGannt> tasks) {
		this.tasks = tasks;
	}
	public int getSelectedRow() {
		return selectedRow;
	}
	public void setSelectedRow(int selectedRow) {
		this.selectedRow = selectedRow;
	}
	public List<String> getDeletedTaskIds() {
		return deletedTaskIds;
	}
	public void setDeletedTaskIds(List<String> deletedTaskIds) {
		this.deletedTaskIds = deletedTaskIds;
	}
	public boolean isCanWrite() {
		return canWrite;
	}
	public void setCanWrite(boolean canWrite) {
		this.canWrite = canWrite;
	}
	public boolean isCanWriteOnParent() {
		return canWriteOnParent;
	}
	public void setCanWriteOnParent(boolean canWriteOnParent) {
		this.canWriteOnParent = canWriteOnParent;
	}
}
